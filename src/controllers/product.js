const { request, response } = require('express');
const { validateProductCode, validateProductName, validateStock } = require('../helpers/validate-fields');
const Product = require('../models/product');

const getProducts = async(req = request, res = response) => {
    try {
        const products = await Product.findAll();
        res.json({ products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Something went wrong`  });
    }
};

const createProduct = async(req = request, res = response) => {
    try {
        const { productCode, productName, stock } = req.body;
        if(!validateProductCode(productCode)) {
            return res.status(400).json({msg: 'product code invalid' })
        }
        const codeExist = await Product.findOne({where: {productCode}});
        if(codeExist) {
            return res.status(400).json({ msg: 'code already exists' });
        }
        if(!validateProductName(productName)) {
            return res.status(400).json({ msg: 'product name invalid' })
        }
        if(!validateStock(stock) || stock <= 0 || stock >= 1000) {
            return res.status(400).json({ msg: 'stock invalid' })
        }
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json({ msg: 'product created correctly' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Something went wrong` });
    }
}

const editProduct = async(req = request, res = response) => {
    try {
        const { productCode, productName, stock } = req.body;
        const { productID } = req.params;
        if(!validateStock(stock) || stock < 0 || stock > 1000) {
            return res.status(400).json({ msg: 'stock invalid' })
        }

        const productDB = await Product.findOne({where: {productCode: productID}});
        if(!productDB) {
            return res.status(404).json({ msg: 'product not found' });
        }
        if(productDB.productCode !== productCode) {
            const productExists = await Product.findOne({where: {productCode}});
            if(productExists) {
                return res.status(400).json({ msg: 'code already exists' });
            }
            if(!validateProductCode(productCode)) {
                return res.status(400).json({msg: 'code invalid' })
            }
            if(!validateProductName(productName)) {
                return res.status(400).json({ msg: 'name invalid' })
            }
            if(!validateStock(stock) || stock <= 0 || stock >= 1000) {
                return res.status(400).json({ msg: 'stock invalid' })
            }
        }
        await productDB.update(req.body);
        res.json({ msg: 'product edited correctly' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong' });
    }
}

module.exports = {
    getProducts,
    createProduct,
    editProduct
};
