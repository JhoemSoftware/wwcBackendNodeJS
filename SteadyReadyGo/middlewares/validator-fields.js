const validateInteger = ( price = '', cylinder = '', stock = '' ) => {
    const data = [];

    if(Number(price))    data.push(Number(price));
    if(Number(cylinder)) data.push(Number(cylinder));
    if(Number(stock))    data.push(Number(stock));

    if(data.length === 3) return data;
}

const validateString = ( name = '', reference = '' ) => {
    if(name.length < 2) return;
    if(reference.length < 3) return;

    return true;
}

module.exports = {
    validateInteger,
    validateString
}