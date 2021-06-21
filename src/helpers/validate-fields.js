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
    console.log(regExpStock.test(stock));
    return regExpStock.test(stock);
}

module.exports = {
    validateProductCode,
    validateProductName,
    validateStock,
};
