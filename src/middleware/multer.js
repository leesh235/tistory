// import multer from "multer";
// import util from "util";

// //multer 설정
// //post로 전송된 파일의 저장경로와 파일명 명시
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         // let dirPath = `./uploads/${req.body.user}`;

//         // if (fs.existsSync(dirPath)) {
//         //     const files = fs.readdirSync(dirPath)
//         //     fs.removeSync(dirPath+"/"+files[0])
//         //     console.log(files[0])
//         // }else{
//         //     fs.mkdirSync(dirPath);
//         // }
//         cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// //파일 저장경로 지정 및 크기제한
// let uploadFile = multer({
//     storage: storage,
//     limits:{
//         filessize: 2 * 1024 * 1024
//     }
// }).single("uploads");

// let uploadFileMiddleware = util.promisify(uploadFile);


// module.exports = uploadFileMiddleware;