var multer = require('multer');
const { v4: uuidv4 } = require('uuid');
var path = require('path');

//aca especificamos como va a ser almacenado
const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req,file,cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

module.exports = multer({storage});