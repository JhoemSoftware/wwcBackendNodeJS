const validateInteger = ( price = '', cylinder = '', stock = '' ) => {
    const data = [];

    if(Number(price))    data.push(Number(price));
    if(Number(cylinder)) data.push(Number(cylinder));
    if(Number(stock))    data.push(Number(stock));

    if(data.length === 3) return data;
}

module.exports = {
    validateInteger
}