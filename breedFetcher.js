const request = require('request');
const arg = process.argv[2];

request(`http://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response,body) => {
  if (error) {
    console.log('error:', error);
  } else {
    const data = JSON.parse(body);
    data.length === 0 ? console.log('Didn find the breed name!') : console.log(data);
  }
});
