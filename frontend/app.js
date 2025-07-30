const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Inicio - EDUCAN',
    marca: 'EDUCAN'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
