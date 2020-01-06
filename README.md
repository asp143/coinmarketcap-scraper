# coinmarketcap-scraper
Creates a request on the coinmarket API for data of each coins defined.
Generates a JSON file for the data fetched. The data should show up in the data folder.

### Packages
- [fs](https://nodejs.org/api/fs.html)
- [axios](https://github.com/axios/axios)
- [moment](https://momentjs.com/)


To run:
```
npm install

npm start
```

### File name convention
```
coin-${current date in epoch time}.json
```

