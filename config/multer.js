let multer = require('multer');
//Una imagen
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        const extension = file.originalname.slice(
            file.originalname.lastIndexOf(".")
        )

        cb(null, Date.now() + extension)

    }
})

var upload = multer({ storage: storage }).single('avatar');