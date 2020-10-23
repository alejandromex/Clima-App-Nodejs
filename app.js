const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).help().argv;

// lugar.getLugarLatLng(argv.direccion).then(resp=>{
//     console.log(resp);
// });

// clima.getClima(55.02464,-1.48698).then(c =>{
//     console.log(c);
// }).catch(err =>{
//     console.log("Error");
// });





const getInfo = (direccion) => {

    lugar.getLugarLatLng(direccion).then(resp=>{
        let latitud;
        let longitud;
        latitud = resp.latt;
        longitud = resp.longt;
        clima.getClima(latitud,longitud).then(clima=>{
            console.log(`El clima de ${resp.city} es de ${clima}`);
        });
    }).catch(err=>{
        console.log("No se pudo determinar el clima de ", direccion);
    })


    //El clima de xxxx es de xxx
    //No se pudo determinar el clima de xxxx

    
}

getInfo(argv.direccion);