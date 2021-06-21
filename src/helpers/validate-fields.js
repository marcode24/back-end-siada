const validateProductCode = (productCode) => {
    const regExpCode = /^[0-9]{13}$/;
    return regExpCode.test(productCode.toString());
}

const validateProductName = (productName) => {
    const regExpName = /^[a-zA-Z\s\S]{5,40}$/;
    return regExpName.test(productName);
}

const validateStock = (stock) => {
    const regExpStock = /^\d{0,4}$/;
    return regExpStock.test(stock);
}

const validatePrice = (price) => {
    const regExpPrice = /^(([0-9][0-9]{0,2})([.][0-9][1-9]{0,1})?|1000|1000.00)$/;
    return regExpPrice.test(price);
}

module.exports = {
    validateProductCode,
    validateProductName,
    validateStock,
    validatePrice
};
