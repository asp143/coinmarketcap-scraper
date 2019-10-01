// External packages
const moment = require('moment');


const COINS = ['ripple', 'dash', 'bitcoin', 'ethereum', 'tether', 'bitcoin-cash'];
const DATA_PROPERTIES = ['date', 'open_price', 'high', 'low','close_price', 'volume', 'market_cap'];
const PREFIX_URL = 'https://coinmarketcap.com';

const YEAR_TO_DATE_URL = `?start=${moment().startOf('year').format('YYYYMMDD')}&end=${moment().format('YYYYMMDD')}`;

const BASE_FILE_NAME = `${Date.now()}.json`;

module.exports = {
    COINS,
    DATA_PROPERTIES,
    PREFIX_URL,
    YEAR_TO_DATE_URL,
    BASE_FILE_NAME
};
