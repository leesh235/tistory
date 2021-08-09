import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB, postToDB } from "./modules/uploadImg"
import { upload } from "./middleware/multer"

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
app.post("/editor", async(req, res) => {
    console.log("editor: ",req.body)
    try{
        upload(req, res, async(err) => {
            const {data} = await postToDB(req);

            if(data.ModifyPostImg.postImgId === null){
                console.log("실패")
                return false;
            }

            console.log("editor: ",req.body)
            const fileData = req.body.editor
            var fileContents = Buffer.from(fileData, "utf8");
            console.log("fileContents: ", fileContents)
            const dirpath = `uploads/${req.body.user}`;
            fs.mkdirSync(dirpath);
            fs.writeFile(dirpath+ "/" + req.body.user + ".html", fileContents)
            // `
            // <!DOCTYPE html>
            // <html>
            //     <head></head>
            //     <body>
            //         ${req.body.editor}
            //     </body>
            // </html>
            // `)
            console.log(req.body.editor);
            console.log(req.body.user);
        })
    }catch(error){
        console.log(error);
    }
})

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