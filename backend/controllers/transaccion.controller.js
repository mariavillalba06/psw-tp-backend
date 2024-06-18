const Transaccion = require("../models/transaccion");
const transaccionCtrl = {};

//Dar de alta una transaccion
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    //transaccion.cantidadDestino=req.body.cantidadOrigen*req.body.tasaConversion;

    try {
        await transaccion.save();
        res.json({
            status: "1",
            msg: "Transaccion guardada.",
        });
    }
    catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando la operacion.",
        });
    }
};
//Recuperar todas las transacciones 
transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
};

//Recuperar un transaccion segun email del cliente
transaccionCtrl.getTransaccionByEmail = async (req, res) => {
    let filter ={};
    if(req.query.emailCliente !=null && req.query.emailCliente !=""){
        filter.emailCliente =req.query.emailCliente;
    }
    var transacciones = await Transaccion.find(filter);
    res.json(transacciones);
};

//Recupera las transacciones segun origen y destino
transaccionCtrl.getTransaccionesByDivisas = async (req, res) => {
    let filter ={};
    if(req.query.monedaOrigen !=null && req.query.monedaOrigen !="" && req.query.monedaDestino !=null && req.query.monedaDestino !=""){
        filter.monedaOrigen =req.query.monedaOrigen;
        filter.monedaDestino =req.query.monedaDestino;
    }
    var transacciones = await Transaccion.find(filter);
    res.json(transacciones);
}

module.exports = transaccionCtrl;