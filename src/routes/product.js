const { Router } = require('express');
const { getProducts, createProduct, editProduct, disableProduct, enableProduct, setPriceProduct } = require('../controllers/product');

const router = Router();

router.get('/', getProducts);

router.post('/create', createProduct);
router.put('/edit/:productID', editProduct);

router.put('/enable/:productID', enableProduct);
router.put('/disable/:productID', disableProduct);
router.put('/setPrice/:productID', setPriceProduct);

module.exports = router;