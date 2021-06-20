const { request, response } = require('express');
const { validateProductCode, validateProductName } = require('../helpers/validate-fields');
const Product = require('../models/product');

const getProducts = async(req = request, res = response) => {
    try {
        const products = await Product.findAll();
        res.json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error in ${error}`  });
    }
};

const createProduct = async(req = request, res = response) => {
    try {
        const { productCode, productName, stock } = req.body;
        if(!validateProductCode(productCode)) {
            return res.status(400).json({msg: 'product code invalid' })
        }
        const codeExist = await Product.findOne({where: {productCode: productCode}});
        if(codeExist) {
            return res.status(400).json({ msg: 'code already exists' });
        }
        if(!validateProductName(productName)) {
            return res.status(400).json({ msg: 'product name invalid' })
        }
        if(typeof stock !== 'number' || stock <= 0 || stock >= 1000) {
            return res.status(400).json({ msg: 'stock invalid' })
        }
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json({ msg: 'product created correctly' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Error in ${error}` });
    }
}

const editProduct = async(req = request, res = response) => {
}

module.exports = {
    getProducts,
    createProduct,
    editProduct
};
