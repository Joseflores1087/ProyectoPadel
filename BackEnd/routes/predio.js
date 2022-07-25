const { Router } = require('express');
const { GetPredio,GetPredioById,GetCancha, GetCanchaById ,NewCancha, DeleteCancha, img } = require ('../controllers/predio-controller');
const multer  = require('multer')
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img/cancha_logo'),
  filename: (req, File, cb) => {
    const ext = File.originalname.split('.').pop()
    const fileName = Date.now()
    cb(null, File.originalname);
    //    },
    //     filename: function (req, file, cb) {
    //       cb(null, file.fieldname + '-' + Date.now())
  },
});

const upload = multer({ storage: storage })


const router = Router ();



router.get('/GetPredio',GetPredio);

router.get('/GetPredioById/:id',GetPredioById);

router.get('/GetCancha/:id',GetCancha);

router.post('/imagen', img)

router.post('/NewCancha',upload.single('file'),NewCancha);

router.post('/DeleteCancha/:id', DeleteCancha);

router.get('/GetCanchaById/:id', GetCanchaById)

module.exports = router;