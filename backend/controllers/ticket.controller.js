const Ticket = require('../models/ticket');
const ticketCtrl = {}

//Dar de alta un ticket
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    /*if(ticket.categoriaEspectador=='l'){
        ticket.precioCobrado=ticket.precioReal-ticket.precioReal*0.2;
    }
    else{
        ticket.precioCobrado=ticket.precioReal;
    }*/
    
    try {
        await ticket.save();
        
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
//Obtener todos los tickets
ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.status(200).json(tickets);
}
//Obtener un ticket
ticketCtrl.getTicketById= async (req, res) =>{
    var ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}

//Eliminar un ticket
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: '1',
            msg: 'Ticket eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//Modificar un ticket
ticketCtrl.updateTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//Recuperar ticekts segun tipo de espectador
ticketCtrl.getTicketsByCategory = async (req, res) => {
    let filter ={};
    if(req.query.categoriaEspectador !=null && req.query.categoriaEspectador !=""){
        filter.categoriaEspectador =req.query.categoriaEspectador;
    }
    var tickets = await Ticket.find(filter).populate("espectador");
    res.json(tickets);
}


module.exports = ticketCtrl;
