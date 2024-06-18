const Producto = require("../models/producto");
const productoCtrl = {};

//Dar de alta un producto
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            status: "1",
            msg: "Producto guardado.",
        });
    } 
    catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando operacion.",
        });
    }
};
//Recuperar todos los productos 
productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
};
//Recupera un producto
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

//Eliminar un producto
productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: "1",
            msg: "Producto eliminado",
        });
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando la operacion",
        });
    }
};

//Modificar un producto
productoCtrl.updateProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        res.status(200).json({
            status: "1",
            msg: "Producto actualizado",
        });
    } 
    catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando la operacion",
        });
    }
};

//Recuperar los productos destacados
productoCtrl.getProductosDestacados = async (req, res) => {
    var productos = await Producto.find({destacado:true});
    res.json(productos);
};

module.exports = productoCtrl;
