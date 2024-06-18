const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.urlencoded({ extended: false }));

//Productos
app.use('/api', require('./routes/producto.route.js'));

//Transacciones
app.use('/api', require('./routes/transaccion.route.js'));

//Espectadores
app.use('/api', require('./routes/espectador.route.js'));

//Tickets
app.use('/api', require('./routes/ticket.route.js'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
console.log('Server started on port http://localhost:3000', app.get('port'));
});
