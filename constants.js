// External packages
const moment = require('moment');


const COINS = ['xrp', 'dash', 'bitcoin', 'ethereum', 'tether', 'bitcoin-cash'];

const PREFIX_URL = 'https://web-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical?';

const YEAR_TO_DATE_URL = `time_end=${moment().valueOf()}&time_start=${moment().startOf('year').valueOf()}`;

const BASE_FILE_NAME = `${Date.now()}.json`;

module.exports = {
    COINS,
    PREFIX_URL,
    YEAR_TO_DATE_URL,
    BASE_FILE_NAME
};
