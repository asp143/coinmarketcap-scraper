/**
 * Returns the change percentage between the opening price and closing price
 * @param {Number} open 
 * @param {Number} close 
 */
const getPercentDiff = (open, close) => {
    return ((close- open) / open) * 100;
};

module.exports = {
    getPercentDiff
};
