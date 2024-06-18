const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/transacciones', transaccionCtrl.getTransacciones);
router.post('/transaccion', transaccionCtrl.createTransaccion);
router.get('/transacciones/cliente', transaccionCtrl.getTransaccionByEmail);
router.get('/transacciones/divisas', transaccionCtrl.getTransaccionesByDivisas);

module.exports = router;