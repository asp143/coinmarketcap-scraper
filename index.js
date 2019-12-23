const axios = require('axios').default;
const fs = require('fs');

const {
    COINS,
    DATA_PROPERTIES,
    PREFIX_URL,
    YEAR_TO_DATE_URL,
    BASE_FILE_NAME
} = require('./constants');

const CoinModel = require('./interface/Coin');

const CreateFinalModel = async (quotes) => {
    console.log('Creating Final model...');
    return quotes.map((coinData) => {
        const coinModel = new CoinModel(coinData.quote.USD);
        return coinModel;
    })
};

const WriteData = async (coin, data) => {
        console.log('Saving Data to Data Folder');
        fs
            .writeFile(`data/${coin}-${BASE_FILE_NAME}`, JSON.stringify(data),
                    function (err) {
                        if (err) throw err;
                    }
            );
};

const initializeScript = async () => {
    console.log('Starting fetching coinbase scraper...');
    for (const coin of COINS) {
        try {
            const url = `${PREFIX_URL}convert=USD&slug=${coin}&${YEAR_TO_DATE_URL}`;
            console.log(`Fetching data for: ${coin}...`);
            const responseApi = await axios.get(url);
            console.log(`Got Response from the API`);
            const FinalModel = await CreateFinalModel(responseApi.data.data.quotes);

            await WriteData(coin, FinalModel)
        } catch (err) {
            console.log(`Some happend on the script: ${err}`);
        }
    }
};

initializeScript();
