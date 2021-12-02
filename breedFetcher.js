const request = require('request');

const fetchBreedDescription = function(input,callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;
  
  request.get(url,function(err,resp,body) {
    if (err) {
      callback(null,err)
    }  else if (!input) {
      callback(err,null)
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(err,null)
      } else {
        callback(null,data[0].description);
      }
       
    }
  });
};
const breedChoice = process.argv.slice(2);
fetchBreedDescription(breedChoice,(error,desc) =>{
  if(error) {
    console.log(elem,error)
  } else {
    console.log(desc);
  }
});


