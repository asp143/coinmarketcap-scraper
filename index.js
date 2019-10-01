const axios = require('axios').default;
const $ = require('cheerio');
const fs = require('fs');

const {
    COINS,
    DATA_PROPERTIES,
    PREFIX_URL,
    YEAR_TO_DATE_URL,
    BASE_FILE_NAME
} = require('./constants');

const { getPercentDiff } = require('./utils');


COINS.forEach((coin) => {
    
    const url = `${PREFIX_URL}/currencies/${coin}/historical-data/${YEAR_TO_DATE_URL}`;
    const dataFormat = {};

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
            const JSON_DATA = tableData.map(table => {
                for(let i = 0; i < table.data.length; i++) {
                    dataFormat[DATA_PROPERTIES[i]] = table.data[i];
                }

                dataFormat['diff_close_open'] = getPercentDiff(dataFormat.open_price, dataFormat.close_price);
                // HACK
                return JSON.parse(JSON.stringify(dataFormat))

            });

            return Promise.resolve(JSON_DATA);
        })
        .then((JSON_DATA) => {

            fs
                .writeFile(`data/${coin}-${BASE_FILE_NAME}`, JSON.stringify(JSON_DATA),
                    function (err) {
                        if (err) throw err;
                    }
                );
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
})
