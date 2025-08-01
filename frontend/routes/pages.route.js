const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;


// routes/servicios.js
const express = require('express');
const routes = express.Router();

router.get('/servicios', (req, res) => {
  res.render('servicios'); // este es el archivo servicios.ejs
});

module.exports = routes;
