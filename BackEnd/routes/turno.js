const { Router } = require('express');
const { GetTurno, GetReserva ,NewTurno,  DeleteTurno, GetTurnoById, GetReservaById  } = require ('../controllers/turno-controller');


const router = Router ();
router.get('/GetReserva', GetReserva);

router.get('/GetReservaById', GetReservaById);

router.get('/GetTurno',GetTurno);

router.post('/NewTurno', NewTurno);

router.post('/DeleteTurno/:id', DeleteTurno);

router.get('/GetTurnoById/:id', GetTurnoById)

module.exports = router;