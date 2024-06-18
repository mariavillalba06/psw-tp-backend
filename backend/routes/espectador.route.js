const espectadorCtrl = require('./../controllers/espectador.controller');

const express = require('express');
const router = express.Router();

router.get('/espectadores', espectadorCtrl.getEspectadores);
router.post('/espectador', espectadorCtrl.createEspectador);
router.get('/espectador/:id', espectadorCtrl.getEspectador);

module.exports = router;