const { Router } = require('express');
const { GetCancha, GetCanchaById ,NewCancha, DeleteCancha, img } = require ('../controllers/cancha-controller');
const multer  = require('multer')
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/img/informes"),
    filename: (req, File, cb) => {
      cb(null, File.originalname);
      //    },
      //     filename: function (req, file, cb) {
      //       cb(null, file.fieldname + '-' + Date.now())
    },
  });
const upload = multer({ storage: storage ,dest:path.join(__dirname, "../public/img/logo_cancha") })


const router = Router ();

router.get('/GetCancha',GetCancha);

router.post('/imagen',upload.single("file"), img)

router.post('/NewCancha',NewCancha);

router.post('/DeleteCancha/:id', DeleteCancha);

router.get('/GetCanchaById/:id', GetCanchaById)

module.exports = router;