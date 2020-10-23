const axios = require('axios');

const getClima = async (latt,long) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=bd2545f9b28e8fea41d9f6360251b6c9&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}