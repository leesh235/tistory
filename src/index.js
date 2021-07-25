import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB } from "./modules/uploadImg"
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

//정적자원 이용
app.use(express.static('uploads'));
app.use(express.static('posts'));


//profile image
app.post("/profile", upload, async(req, res) => {
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