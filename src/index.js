import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";

const app = express();
const PORT = 5000;

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
        cb(null, file.originalname+ "." + Date.now());
    }
});

//파일 저장경로 지정 및 크기제한
const upload = multer({
    storage: storage,
    limits:{
        filessize: 100 * 1024 * 1024
    }
});

//해당 주소에서 image 받기
app.post("/profile", upload.single("streamfile"), async(req, res) => {
    // try{
    //     if (fs.existsSync("./uploads/userprofile4")) {
    //         fs.removeSync("./uploads/userprofile4");
    //     }
    //     fs.mkdirSync("./uploads/userprofile4");
    //     fs.writeFile(
    //         "./uploads/userprofile4" + "/profile.html",
    //         '<p><img src="' + req.file + '" alt="image"></p>'
    //     );
    //     console.log("success!");
    // }catch(error){
    //     console.log(error);
    // }
    console.log(req.body.streamfile[0])
})

app.get("/", async(req, res) => {
    try{
        if(fs.existsSync("userprofile2")){
            const postName = fs.readdirSync("userprofile2")[0];
            // console.log(postName);
            const postPath = path.join("userprofile2", postName);
            res.download(postPath, postName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("download success");
                }
            });
        }
        
    }catch(error){
        console.log(error);
    }
})

// app.post("/add", upload.single("streamfile"), async(req, res) => {
    
// })

// //해당 주소로 image보내기
// app.get("/profile", async(req, res) => {
    
// })

// app.get("/detail/:postId", async(req, res) => {
//     const postId = req.params.postId;
// })

//서버 실행알림
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})