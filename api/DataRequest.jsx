var axios = require('axios');

const REQUEST_URL = '';

//dummy data
module.exports = {
    getData: function(dummyData) {
        //var encodedLocation = decodeURIComponent(location);
        //var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // return axios.get().then(function (response) {
        //     if (response.data.message) {
        //         throw new Error(response.data.message);
        //     } else {
        //         return response.data;
        //     }
        // }, function (response) {
        //     throw new Error(response.data.message);
        // });

        return new Promise(function (resolve, reject) {
            if (dummyData) {
                resolve (dummyData);
            } else {
                reject ('No data received');
            }
        })
    }
};