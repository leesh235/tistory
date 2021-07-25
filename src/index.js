import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB } from "./modules/uploadImg"

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

//정적자원 이용
app.use(express.static('uploads'));
//multer 설정
//post로 전송된 파일의 저장경로와 파일명 명시
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dirPath = `./uploads/${req.body.user}`;

        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath)
            fs.removeSync(dirPath+"/"+files[0])
            console.log(files[0])
        }else{
            fs.mkdirSync(dirPath);
        }
        cb(null, dirPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

//파일 저장경로 지정 및 크기제한
let upload = multer({
    storage: storage,
    limits:{
        filessize: 100 * 1024 * 1024
    }
}).single("streamfile");

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
        // console.log("userId: ", userId)
        const dirpath = `uploads/${userId}`;
        const filename = fs.readdirSync(dirpath)[0];
        if(filename){
            const uri = dirpath+ "/" + filename
            res.status(200).send({profileImg: uri});
        }else{
            res.status(404).send({message: "no such image"});
        }
    }catch(err){
        res.status(500).send({message: `${err}`})
    }
})

//post image

//서버 실행알림
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})