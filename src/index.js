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
app.use(bodyParser.json());
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

//해당 주소에서 image 받기
app.post("/profile", async(req, res) => {
    try{
        upload(req, res, (err) => {
            if(req.file){
                console.log(req.file)
                console.log("success!");
            } else {
                console.log("no such file");
            }
        })
    }catch(error){
        console.log(error);
    }
})

app.get("/profileImg", async(req, res) => {
    try{
        const dirpath = "uploads/user";
        const filename = fs.readdirSync(dirpath)[0];
        if(filename){
            const uri = "user/" + filename
            res.status(200).send({profileImg: uri});
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