const request = require('request');

const fetchBreedDescription = function(input,callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;

  request.get(url,function(err,resp,body) {
    if (err) {
      callback(null,err);
    }  else if (!input) {
      callback(err,null);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {
        callback(err,null);
      } else {
        callback(null,data[0].description);
      }
       
    }
  });
};

module.exports = {fetchBreedDescription};




