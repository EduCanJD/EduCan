const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

// Ruta correcta a tus vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views/pages'));

// Archivos estáticos (CSS, imágenes, JS)
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio | EDUCAN', marca: 'EDUCAN'}); // Renderiza frontend/views/pages/index.ejs
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
