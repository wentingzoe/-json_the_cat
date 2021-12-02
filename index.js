const {fetchBreedDescription} = require('./breedFetcher');
const breedChoice = process.argv.slice(2);
fetchBreedDescription(breedChoice,(error,desc) =>{
  if (error) {
    console.log('Error fetch details:',error);
  } else {
    console.log(desc);
  }
});