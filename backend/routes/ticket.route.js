const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.post('/ticket', ticketCtrl.createTicket);
router.get('/tickets', ticketCtrl.getTickets);
router.get('/ticket/:id', ticketCtrl.getTicketById);
router.delete('/ticket/:id', ticketCtrl.deleteTicket);
router.put('/ticket/:id', ticketCtrl.updateTicket);
router.get('/tickets/categoria', ticketCtrl.getTicketsByCategory);

module.exports = router;