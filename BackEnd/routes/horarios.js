const { Router } = require('express');
const {  GetHorario, AddHorario } = require ('../controllers/horario-controllers');


const router = Router ();
//router.get('/GetSeguidos/:id', GetSeguidos)
router.get('/GetHorario/:id', GetHorario)

router.post('/AddHorario', AddHorario),

module.exports = router;