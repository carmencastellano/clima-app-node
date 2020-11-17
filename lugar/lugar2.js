const axios = require('axios');

//a definir una funcion con const, me aseguro q siempre sea una funcion
// y ademas es mas rapidp

const getLugarLatLng = (dir) => {

    const encodeUlr = encodeURI(dir);

    // const instance = axios.create({
    //     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    //     // timeout: 1000,
    //     headers: {
    //         'x-rapidapi-key': '1ce11195bfmsh6ff41c08a19aa90p17c2d3jsn0592e9e8214e'
    //     }
    // });
    let key = '1ce11195bfmsh6ff41c08a19aa90p17c2d3jsn0592e9e8214e';
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUlr}json=${key}`
    })

    instance.get()
        .then(resp => {
            console.log(resp);
            // console.log(resp.data.Result[0])
        })
        .catch(err => {
            console.log('ERRRROOORR!!!!', err)
        });

    // return {
    //     direccion,
    //     latitud,
    //     longitud
    // }
}