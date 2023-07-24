import multer from "multer";

const upload = multer({dest:'uploads'});
//destination folder for uploaded files.    

export default upload;