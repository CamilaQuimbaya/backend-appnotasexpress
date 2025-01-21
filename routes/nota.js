const express = require('express');

const router = express.Router();

const notaController = require('../controllers/notaController');

router.post('/nota', notaController.crearNota);
router.get('/notas', notaController.obtenerNotas);
router.get('/notas/:id', notaController.obtenerNotaPorId);
router.put('/notas/:id', notaController.actualizarNota);
router.delete('/notas/:id', notaController.eliminarNota);


module.exports = router;