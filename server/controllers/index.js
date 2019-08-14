const fetch = require("node-fetch");
const axios = require('axios');

module.exports = {
  getWeather: {
    get: async (req, res) => {
      const city = req.query.city;

      console.log(city)
      const url = `https://www.metaweather.com/api/location/search/?query=${city}`

      axios.get(url)
        .then(function({data}) {
         let woeid = data[0].woeid
         return axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
      }).then(({ data }) => {
        res.send(data.consolidated_weather)
      }).catch(error => res.send(error));
    } 
  }
};