// External packages
const dayjs = require('dayjs');


const COINS = ['xrp', 'dash', 'bitcoin', 'ethereum', 'tether', 'bitcoin-cash'];

const PREFIX_URL = process.env.COINMARKET_CAP_LINK;

const YEAR_TO_DATE_URL = `time_end=${dayjs().valueOf()}&time_start=${dayjs().startOf('year').valueOf()}`;

const BASE_FILE_NAME = `${Date.now()}.json`;

module.exports = {
    COINS,
    PREFIX_URL,
    YEAR_TO_DATE_URL,
    BASE_FILE_NAME
};
