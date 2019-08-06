const getPercentDiff = (open, close) => {
    return ((close- open) / open) * 100;
}

module.exports = {
    getPercentDiff
};
