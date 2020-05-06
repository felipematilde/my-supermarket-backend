const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();
        return res.json(products);
    },
    async show(req, res){
        const product = await Product.find({name: req.params.id});
        return res.json(product);
    },
    async create(req, res){
        const product = await Product.create(req.body);
        return res.send();
    }
}