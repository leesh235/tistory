import multer from "multer";
import fs from "fs-extra";

//multer 설정
//post로 전송된 파일의 저장경로와 파일명 명시
const controller = (init) => {
    if(init.user !== ""){
        return `./uploads/${init.user}`
    }else if (init.post !== ""){
        return `./posts/${init.post}`
    }
}
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // let dirPath = `./uploads/${req.body.user}`;
        let dirPath = controller(req.body);

        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath)
            fs.removeSync(dirPath+"/"+files[0])
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
export let upload = multer({
    storage: storage,
    limits:{
        filessize: 100 * 1024 * 1024
    }
}).single("streamfile")