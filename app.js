const direccion = {
    alias: 'd',
    desc: 'Descripcion de la ciudad para obtener el clima',
    demand: true
};


const argv = require('yargs').option({
        direccion
    })
    .help()
    .argv;

console.log(argv.direccion);


// // === todo esto se va a lugar.js=====================================

// const axios = require('axios');
// let key = '475119603340268312108x14090';
// const instance = axios.create({
//     baseURL: `https://geocode.xyz/${argv.direccion}&auth=${key}?json=1`
// })

// instance.get()
//     .then((resp) => {
//         // let { longt, latt, matches } = resp.data;
//         const { longt, latt, matches, standard } = resp.data;
//         console.log(resp.data);
//         console.log(longt, latt);
//         console.log('matc', matches);
//         console.log('stan', standard);
//         console.log(resp.data.standard.countryname);
//         console.log(resp.data.standard.addresst);
//     }).catch((err) => {
//         console.log('ERRROR!!!', err)
//     });
// === === === === === === === === === === === === === === === === === === === === === === ===

// const lugar = require('./lugar/lugar');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log) // .then(resp => console.log(resp)) esto es lo mismo
//     .catch(console.log)

// const clima = require('./clima/clima');

// clima.getClima(40.750000, -74.000000)
//     .then(console.log) // .then(resp => console.log(resp)) esto es lo mismo
//     .catch(console.log)

const getInfo = async(direccion) => {

    const lugar = require('./lugar/lugar');
    const clima = require('./clima/clima');

    try {
        const resp = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(resp.latt, resp.longt);
        return `El clima de  ${direccion} tiene la temperatura de  ${temp}`;

    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch



// let getInformacion = async(id) => {
//     let empleado = await getEmpleado(id)
//     let resp = await getSalario(empleado)
//     return ` el empleado ${resp.nombre} tiene un salario de ${resp.salario}`;
// }

// getInformacion(1)
//     .then(mensaje => console.log(mensaje))
//     .catch(err => console.log(err))