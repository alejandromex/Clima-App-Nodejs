const axios = require('axios');


const getLugarLatLng = async ( direccion ) =>{
    
    const encodeUrl =encodeURI(direccion);
    
    
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,
    })
    
    const resp = await instance.get();

    if(resp.data.alt.length === 0 )
    {
        throw new Error(` No hay resultados para ${direccion}`);
    }



    let data = resp.data.alt.loc;
    let city =  data.city;
    let latt = data.latt;
    let longt = data.longt


    return {
        city,
        latt,
        longt
    }

}

module.exports = {
    getLugarLatLng
}

