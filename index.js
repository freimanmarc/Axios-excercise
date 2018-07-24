const axios = require('axios');

function displayData(information){
  console.log(information.data.name);
}

function errorHandler(err){
  console.log(err.message);
}

async function starWars(){
let data = await axios.get('https://swapi.co/api/planets/2/').catch(errorHandler);
let data2 = await axios.get('https://swapi.co/api/planets/3/').catch(errorHandler);

displayData(data);
displayData(data2);
}

starWars();
