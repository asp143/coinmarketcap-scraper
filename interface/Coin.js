const { getPercentDiff } = require('../utils');

function Coin (data) {
    this.open_price = data.open;
    this.close_price = data.close;
    this.high = data.high;
    this.low = data.low;
    this.volume = data.volume;
    this.market_cap = data.market_cap;
    this.timestamp = data.timestamp;
    this.percent_change =  getPercentDiff(data.open, data.close);
};

module.exports = Coin;