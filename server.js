const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://...etdb');

requireDir('./src/models/');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);