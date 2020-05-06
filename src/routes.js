const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.post('/product', ProductController.create);

module.exports = routes;