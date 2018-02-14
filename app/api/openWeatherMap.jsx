// npm install axios --save

var axios = require('axios');

// 6f14c10efbad0bd383a18ea4c684fa05
var myAppId = '6f14c10efbad0bd383a18ea4c684fa05';

// generate the base URL
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + myAppId + '&units=metric';


// what to return when file is required
module.exports = {
    getTemp: function(location) {
        // using ES6 template strings
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`;

        // library uses promises
        // by using return we are making chained promises - calling then twice - once here, and once where getTemp is called
        // the first time we are parsing the information and sending it to the error or the success function
        return axios.get(requestUrl).then(function(res) {

            // check for edge cases (when passing non-existent location etc.)
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.message);
        });
    }
}