const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      data.length === 0 ? callback('Didn find the breed name!',null) : callback(null,data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };