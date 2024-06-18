const Espectador = require("../models/espectador");
const espectadorCtrl = {};

//Dar de alta un espectador
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(200).json({
            status: "1",
            msg: "Espectador guardado.",
        });
    } 
    catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando operacion.",
        });
    }
};
//Obtener todos los espectadores 
espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
};

//Obtener un espectador 
espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
};

module.exports = espectadorCtrl;