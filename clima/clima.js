const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a21aa5be184d6de869dbfc7e9f69b91d&units=metric`);

    // const resp = await axios.get('api.openweathermap.org/data/2.5/weather?lat=40.750000&lon=-74.000000&appid=a21aa5be184d6de869dbfc7e9f69b91d&units=metric');
    return resp.data.main.temp;
}

module.exports = {
    getClima
}