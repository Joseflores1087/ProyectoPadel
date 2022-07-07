const { Router } = require('express');
const { GetTurno, NewTurno,  DeleteTurno, GetTurnoById  } = require ('../controllers/turno-controller');


const router = Router ();

router.get('/GetTurno',GetTurno);

router.post('/NewTurno', NewTurno);

router.post('/DeleteTurno/:id', DeleteTurno);

router.get('/GetTurnoById/:id', GetTurnoById)

module.exports = router;