import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
const PORT = 3000;

//cors설정
const corsOptions = {
    exposedHeaders: "Content-Disposition",
    origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

//정적자원 이용
app.use(express.static('uploads'));

//multer 설정
//post로 전송된 파일의 저장경로와 파일명 명시
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
//파일 저장경로 지정 및 크기제한
const uploadImg = multer({
    storage: storage,
    limits:{
        filessize: 100 * 1024 * 1024
    }
});

//서버 실행알림
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})