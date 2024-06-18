const productoCtrl = require('./../controllers/producto.controller');

const express = require('express');
const router = express.Router();

router.get('/productos', productoCtrl.getProductos);
router.post('/producto', productoCtrl.createProducto);
router.get('/producto/:id', productoCtrl.getProducto);
router.put('/producto/:id', productoCtrl.updateProducto);
router.delete('/producto/:id', productoCtrl.deleteProducto);
router.get('/productos/productos-destacados', productoCtrl.getProductosDestacados);

module.exports = router;