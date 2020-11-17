const axios = require('axios');


// const getClima = async(lat, lng) => {
//     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=aquiTuAPIKEY&units=metric`);
//                return resp.data.main.temp;
//     };

//     module.exports = {
//         getClima
//     }


//geocode.xyz key475119603340268312108x14090 
//https://geocode.xyz/[request]&auth=475119603340268312108x14090 )


//a definir una funcion con const, me aseguro q siempre sea una funcion
// y ademas es mas rapidp
//    let key = '1ce11195bfmsh6ff41c08a19aa90p17c2d3jsn0592e9e8214e';


const getLugarLatLng = (dir) => {

    // const encodeUlr = encodeURI(dir);
    const encodeUlr = (dir);

    const key = '475119603340268312108x14090';
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUlr}json=${key}`
    });

    instance.get()
        .then(resp => {
            console.log(resp.data);
            // console.log(resp.data);

            // console.log(resp.data.Result[0])
        })
        .catch(err => {
            console.log('ERRRROOORR!!!!', err)
        });
}


// return {
//     direccion,
//     latitud,
//     longitud
// }
// }






// var axios = require("axios").default;

// var options = {
//     method: 'GET',
//     url: 'https://rapidapi.p.rapidapi.com/latlon.php',
//     params: { location: 'Madrid' },
//     headers: {
//         'x-rapidapi-key': '1ce11195bfmsh6ff41c08a19aa90p17c2d3jsn0592e9e8214e',
//         'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
//     }
// };

// axios.request(options)
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });