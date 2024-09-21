const express = require('express');
const router = express.Router();
const vange = require('../controller/vincentController');


router.get('/', vange.index);         
router.get('/contact', vange.contact); 
router.get('/products', vange.products); 
router.get('/services', vange.services); 
router.get('/about', vange.about);  

module.exports = router;
