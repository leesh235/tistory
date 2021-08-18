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

app.get("/profileImg/:userId", async(req, res) => {
    try{
        const userId = req.params.userId
        const dirpath = `uploads/${userId}`;
        const filename = fs.readdirSync(dirpath)[0];
        if(filename){
            //uploads를 지정해줄 필요없음, 지정하면 오류발생
            const uri = userId+ "/" + filename
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

//editor를 통해 들어온 text 저장
app.post("/editor", async(req, res) => {
    try{
        upload(req, res, async(err) => {
            console.log("body: ",req.body)
            // console.log("file: ",req.file)
            const {data : { uploadText : { check, status } }} = await postContentsToDB(req);
            if(check){
                const dirPath = `./uploads/${req.body.postId}`;
                const fileData = req.body.editor
                let fileContents = Buffer.from(fileData, "utf8");

                if (fs.existsSync(dirPath)) {
                    fs.removeSync(dirPath);
                }

                fs.mkdirSync(dirPath);
                fs.writeFile(dirPath+ "/" + req.body.title + ".html", fileContents)
            }else{
                console.log("실패")
                return false;
            }
        })
    }catch(error){
        console.log(error);
    }
})

// app.post("/editor", async(req, res) => {
//     try{
//         upload(req, res, async(err) => {
//             console.log("body: ",req.body)
//             console.log("headers: ",req.headers)
//             const {data} = await postToDB(req);
//             if(data.ModifyPostImg.postImgId === null){
//                 console.log("실패")
//                 return false;
//             }
//             postId = req.body.user;
//             const fileData = req.body.editor
//             var fileContents = Buffer.from(fileData, "utf8");
//             // console.log("fileContents: ", fileContents)
//             console.log("postId: ", tempoFile)
//             const dirpath = `uploads/${req.body.user}`;
//             fs.mkdirSync(dirpath);
//             fs.writeFile(dirpath+ "/" + req.body.user + ".html", fileContents)
//         })
//     }catch(error){
//         console.log(error);
//     }
// })

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

//post image
app.post("/post", async(req, res) => {
    try{
        upload(req, res, async(err) => {
            const {data} = await postToDB(req);

            if(data.ModifyPostImg.postImgId === null){
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

app.get("/postImg/:postId", async(req, res) => {
    try{
        const postId = req.params.postId
        const dirpath = `uploads/${postId}`;
        const filename = fs.readdirSync(dirpath)[0];
        if(filename){
            //uploads를 지정해줄 필요없음, 지정하면 오류발생
            const uri = postId+ "/" + filename
            res.status(200).send({postImg: uri});
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