const { Router } = require('express');
const {  GetHorario } = require ('../controllers/horario-controllers');


const router = Router ();

router.get('/GetHorario',GetHorario);

module.exports = router;