const fs =      require('fs');
const config =  require('./dist/config/config.json');

var updateAppAPI = function(apiPath) {
    config.apiURL = apiPath.toString()
    fs.writeFile('./dist/config/config.json', config, 'utf8')
};

if (process.env.API_PATH)
    updateAppAPI(process.env.API_PATH);
