import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB, postImageToDB, postContentsToDB } from "./modules/uploadImg"
import { upload, imageUpload } from "./middleware/multer"

const app = express();
const PORT = 5000;

//cors설정
const corsOptions = {
    exposedHeaders: "Content-Disposition",
    origin: "http://localhost:3000",
};

//middleware 등록
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

//정적자원 이용
app.use(express.static('uploads'));


//profile image
app.post("/profile", async(req, res) => {
    try{
        upload(req, res, async(err) => {
            const {data} = await profileToDB(req);
            // console.log("data: ", data.ModifyUserImg.userImgId);

            if(data.ModifyUserImg.userImgId === null){
                return false;
            }

            if(req.file){
                // console.log(req.file)
                console.log("success!");
            } else {
                console.log("no such file");
            }
        })
    }catch(error){
        console.log("upload fail");
        console.log(error);
    }
})

app.get("/profileImg/:email", async(req, res) => {
    try{
        const email = req.params.email
        const dirpath = `uploads/${email}`;
        const filename = fs.readdirSync(dirpath)[0];
        if(filename){
            //uploads를 지정해줄 필요없음, 지정하면 오류발생
            const uri = email+ "/" + filename
            res.status(200).send({profileImg: uri});
        }else{
            res.status(404).send({message: "no such image"});
        }
    }catch(err){
        res.status(500).send({message: `${err}`})
    }
})

//editor
//editor를 통해 들어온 image저장
app.post("/editorImg", async(req, res) => {
    try{
        imageUpload(req, res, async(err) => {
            console.log("body: ",req.body)
            console.log("headers: ",req.headers)
            console.log("file: ",req.file)
            // const { data } = await postImageToDB(req)

        })
    }catch(err){
        console.log(err)
    }
})

//editor
app.post("/editor", async(req, res) => {
    try{
        upload(req, res, async(err) => {
            console.log("body: ",req.body)
            console.log("file: ",req.file)
            const {data : { uploadText : { check, status } }} = await postContentsToDB(req);
            if(check){
                const dirPath = `./uploads/${req.body.postId}`;
                const fileData = req.body.editor
                let fileContents = Buffer.from(fileData, "utf8");

                if(fs.existsSync(dirPath)) {
                    const files = fs.readdirSync(dirPath)
                    fs.removeSync(dirPath+"/"+files[0])
                }else{
                    fs.mkdirSync(dirPath);
                }

                fs.writeFile(dirPath+ "/" + req.body.title + ".html", fileContents)
                

                return true;
            }else{
                console.log("실패")
                return false;
            }
        })
    }catch(error){
        console.log(error);
    }
})

//post 삭제
app.get("/editor/delete/:postId", async(req, res) => {
    try{
        const postId = req.params.postId;
        const dirPath = `uploads/${postId}`;
        console.log("postId: ", postId)
        if (fs.existsSync(dirPath)) {
            fs.removeSync(dirPath);
            res.status(200).send({message: "success delete post"});
        }else{
            res.status(200).send({message: "not exist post"});
        }

    }catch(error){
        console.log(error);
        res.status(500).send({message: "server error"});
    }
})

//post 불러오기
app.get("/editor/:postId", async(req, res) => {
    try{
        const postId = req.params.postId
        const dirpath = `uploads/${postId}`;
        const filename = fs.readdirSync(dirpath)[0].toString();
        if(filename){
            //uploads를 지정해줄 필요없음, 지정하면 오류발생
            const uri = dirpath+ "/" + filename
            console.log(uri)
            // res.status(200).sendFile(filename.toString(),{root:__dirname});
            res.status(200).download(uri, filename, (err) => {
                console.log(err);
            });
        }else{
            res.status(404).send({message: "no such image"});
        }
    }catch(err){
        res.status(500).send({message: `${err}`})
    }
})

//서버 실행알림
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})