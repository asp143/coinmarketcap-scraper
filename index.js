const axios = require('axios').default;
const $ = require('cheerio');
const _ = require('lodash');
const fs = require('fs');
const { coins } = require('./constants');
const moment = require('moment');

const file_path = `data/${Date.now()}.json`;

_.forEach(coins, (coin) => {
    const url = `https://coinmarketcap.com/currencies/${coin}/historical-data/?start=${moment().startOf('year').format('YYYYMMDD')}&end=${moment().format('YYYYMMDD')}`;
    const dataFormat = {};
    const data_properties = ['date', 'open_price', 'high', 'low','close_price', 'volume', 'market_cap'];
    axios
        .get(url)
        .then((result) => {
            const html = $.load(result.data);
            const table = html('.table tr.text-right')
                    .map(function(){
                        const data = html(this).text().trim().split('\n');
                        return {data};
                    })
                    .get();
            return Promise.resolve(table);
        })
        .then((tableData) => {
            _.forEach(tableData, table => {
                for(let i = 0; i < table.data.length; i++) {
                    dataFormat[data_properties[i]] = table.data[i];
                }
                //TODO: Improve this part
                fs.appendFile(file_path, JSON.stringify(dataFormat) + "," + "\n" , function (err) {
                    if (err) throw err;
                });
            })
            console.log('Done fetching data from coinmarketcap');
        })
        .catch(err => {
            throw err;
        });
})
