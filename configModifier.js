const fs =      require('fs');
const config =  require('./dist/config/config.json');

var updateAppAPI = function(apiPath) {
    config.apiURL = apiPath.toString();
    console.log(config.apiURL);
    fs.writeFile('./dist/config/config.json', JSON.stringify(config), 'utf8')
};

if (process.env.API_PATH)
    updateAppAPI(process.env.API_PATH);
