// server/index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const socketIO = require('socket.io');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));

// Rutas del backend
app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// Iniciar servidor
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Configuración de Socket.io
const io = socketIO(server);
io.on('connection', (socket) => {
  console.log('Un nuevo jugador se ha conectado');
  socket.on('disconnect', () => {
    console.log('Jugador desconectado');
  });
});
