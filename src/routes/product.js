const { Router } = require('express');
const { getProducts, createProduct, editProduct } = require('../controllers/product');

const router = Router();

router.get('/', getProducts);

router.post('/create', createProduct);
router.put('/edit/:productID', editProduct);

router.put('/enable/:productID');
router.put('/disable/:productID');
router.put('/setPrice/:productID');

module.exports = router;