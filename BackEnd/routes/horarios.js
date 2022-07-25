const { Router } = require('express');
const {  GetHorario } = require ('../controllers/horario-controllers');


const router = Router ();

router.post('/GetHorario/:id',GetHorario);

module.exports = router;