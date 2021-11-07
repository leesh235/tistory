import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB, postContentsToDB } from "./modules/uploadImg"
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
app.use(express.static('uploadPosts'));


//profile image
app.post("/profile", async(req, res) => {
    try{
        upload(req, res, async(err) => {
            const {data: {ModifyUserImg: {
                check, status
            }}} = await profileToDB(req);
            // console.log("data: ", data.ModifyUserImg.userImgId);

            if(!check){
                return false;
            }

            if(req.file){
                res.status(200).send({message: "success!"});
            } else {
                res.status(404).send({message: "no such file"});
            }
        })
    }catch(error){
        res.status(500).send({message: `${err}`})
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
app.post("/editor", async(req, res) => {
    try{
        upload(req, res, async(err) => {
           
            const {data : { uploadText : { check, status } }} = await postContentsToDB(req);

            if(check){
                const uerDirPath = `./uploadPosts/${req.body.writer}`;

                if(!fs.existsSync(uerDirPath)){
                    fs.mkdirSync(uerDirPath);
                }
                
                const dirPath = `${uerDirPath}/${req.body.postId}`;
                const fileData = req.body.editor
                let fileContents = Buffer.from(fileData, "utf8");

                if(fs.existsSync(dirPath)) {
                    const files = fs.readdirSync(dirPath)
                    fs.removeSync(dirPath+"/"+files[0])
                }else{
                    fs.mkdirSync(dirPath);
                }

                fs.writeFile(dirPath+ "/" + req.body.title + ".html", fileContents)
                

                res.status(200).send({message: `success`});
            }else{
                res.status(404).send({message: `${status}`});
            }
        })
    }catch(error){
        res.status(500).send({message: `${err}`});
    }
})

//post 불러오기
app.get("/getPost/:writer/:postId", async(req, res) => {
    try{
        console.log(req.params)
        const writer = req.params.writer
        const postId = req.params.postId
        const uerDirPath = `uploadPosts/${writer}`;
        const dirpath = `${uerDirPath}/${postId}`;
        const filename = fs.readdirSync(dirpath)[0].toString();
        if(filename){
            //uploadPosts를 지정해줄 필요없음, 지정하면 오류발생
            const uri = dirpath+ "/" + filename
            res.status(200).download(uri, filename, (err) => {
                console.log(err);
            });
        }else{
            res.status(404).send({message: "no such image"});
        }
    }catch(err){
        res.status(500).send({message: `${err}`});
    }
})

//post 삭제
app.get("/editor/delete/:writer/:postId", async(req, res) => {
    try{
        const writer = req.params.writer
        const postId = req.params.postId;
        const uerDirPath = `uploadPosts/${writer}`;
        const dirPath = `${uerDirPath}/${postId}`;
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

//회원탈퇴시 모든 post 삭제
app.get("/unregister/:writer", async(req, res) => {
    try{
        const writer = req.params.writer;

        const uerDirPath = `uploadPosts/${writer}`;
        const uerProfilePath = `uploads/${writer}`;

        //디렉토리를 삭제하면 빈 폴더가 남지않는다
        if(fs.existsSync(uerProfilePath)){
            fs.removeSync(uerProfilePath);
        }
        if (fs.existsSync(uerDirPath)) {
            fs.removeSync(uerDirPath);
            res.status(200).send({message: "success unregister"});
        }else{
            res.status(200).send({message: "fail unregister"});
        }

    }catch(error){
        console.log(error);
        res.status(500).send({message: "server error"});
    }
})

//서버 실행알림
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})