const axios = require('axios');


const getLugarLatLng = async(dir) => {
    // se hace con create y no directamente con get por los headers
    let key = '475119603340268312108x14090';
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${dir}&auth=${key}?json=1`
    })

    // instance.get()
    //     .then((resp) => {
    //         let { longt, latt } = resp.data;
    //         console.log(longt, latt);
    //     }).catch((err) => {
    //         console.log('ERRROR!!!', err)
    //     });


    // al usar await y async

    const resp = await instance.get();

    const { longt, latt, matches, standard } = resp.data;

    if (matches === 0) {
        throw new Error(`No hay resultados para ${dir}`)

    } else {
        const city = (standard.countryname);
        const country = (standard.city);

        const direccion = city + ' ' + country;
        return {
            direccion,
            longt,
            latt
        }
    }

}

module.exports = {
    getLugarLatLng
}