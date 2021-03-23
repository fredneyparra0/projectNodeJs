const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {titulo : 'titulo renderizado con ejs'} )
})

router.get('/contact', (req, res) => {
  res.render('contact', {titulo: 'fredneyparra0@gmail.com'})
})

module.exports = router;