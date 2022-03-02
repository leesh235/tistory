import express from "express";
import cors from "cors";
import fs from "fs-extra";
import morgan from "morgan";
import { profileToDB, postToDB } from "./modules/uploadImg";
import { upload } from "./middleware/multer";
import "./env";

const app = express();
const PORT = process.env.PORT;
const origin = `${process.env.CLIENT}`;

//cors설정
const corsOptions = {
    exposedHeaders: "Content-Disposition",
    origin: origin,
};

//middleware 등록
// app.use(cors(corsOptions));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//정적자원 이용
app.use(express.static('uploadNotice'));
app.use(express.static('uploadPosts'));

// profile image
// app.post("/profile", async(req, res) => {
//     try{
//         upload(req, res, async(err) => {
//             console.log(req.body)
//             const {data: {ModifyUserImg: {
//                 check, status
//             }}} = await profileToDB(req);

//             if(!check){
//                 return false;
//             }

//             if(req.file){
//                 res.status(200).send({message: "success!"});
//             } else {
//                 res.status(404).send({message: "no such file"});
//             }
//         })
//     }catch(error){
//         res.status(500).send({message: `${err}`})
//     }
// })

// app.get("/profileImg/:email", async(req, res) => {
//     try{
//         const email = req.params.email
//         const dirpath = `uploads/${email}`;
//         const filename = fs.readdirSync(dirpath)[0];
//         if(filename){
//             //uploads를 지정해줄 필요없음, 지정하면 오류발생
//             const uri = process.env.FILESERVER + "/" + email + "/" + filename
//             res.status(200).send({profileImg: uri});
//         }else{
//             res.status(404).send({message: "no such image"});
//         }
//     }catch(err){
//         res.status(500).send({message: `${err}`})
//     }
// })

//회원탈퇴시 모든 post 삭제
// app.post("/unregister", async(req, res) => {
//     try{
//         const writer = req.body.writer;

//         const uerDirPath = `uploadPosts/${writer}`;
//         const uerProfilePath = `uploads/${writer}`;

//         //디렉토리를 삭제하면 빈 폴더가 남지않는다
//         if(fs.existsSync(uerProfilePath)){
//             fs.removeSync(uerProfilePath);
//         }
//         if (fs.existsSync(uerDirPath)) {
//             fs.removeSync(uerDirPath);
//             res.status(200).send({message: "success unregister"});
//         }else{
//             res.status(200).send({message: "fail unregister"});
//         }

//     }catch(error){
//         console.log(error);
//         res.status(500).send({message: "server error"});
//     }
// })

//post 생성
app.post("/post", async(req, res) => {
    try{
        upload(req, res, async(err) => {
  
            const { data } = await postToDB(req);

            if(data?.writeEditor.__typename === "EditorSuccess"){
                const uerDirPath = `./uploadPosts`;

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
                

                res.status(200).send({message: `${data?.writeEditor?.message}`});
            }else{
                res.status(404).send({message: `${data?.writeEditor?.message}`});
            }
        })
    }catch(error){
        res.status(500).send({message: `${error}`});
    }
})

//post 삭제
app.post("/delete-post", async(req, res) => {
    try{
        const postId = req.body.postId;
        const dirPath = `uploadPosts/${postId}`;
        if (fs.existsSync(dirPath)) {
            fs.removeSync(dirPath);
            res.status(200).send({message: "success delete post"});
        }else{
            res.status(404).send({message: "not exist post"});
        }
    }catch(error){
        res.status(500).send({message: `${error}`});
    }
})

//서버 실행알림
app.listen(PORT, () => {
    console.log(`fileserver:${PORT}`);
})