const Product = require('../models/Product');
const productController = {};

productController.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

productController.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

productController.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: "Product does not exists" });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

productController.editProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) return res.status(404).json({ msg: "Product does not exists" });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

productController.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct)
            return res.status(404).json({ msg: "Product does not exists" });
        return res.status(204).json();
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

module.exports = productController;