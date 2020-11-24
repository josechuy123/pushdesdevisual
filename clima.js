//esto fue la primer parte
const request = require('request');
https: //api.weatherstack.com/current?access_key=3c75ec6b6c9539f53d06c6f9867d90f6&query=Colima

    var statusClima = (estado, callback) => {
        let urlLatLon = `http://api.weatherstack.com/current?access_key=3c75ec6b6c9539f53d06c6f9867d90f6&query=${estado}`

        request(urlLatLon, (error, response, body) => {
            if (error) {
                callback('Ocurrio algun error con la busqueda', undefined);
            } else {
                let data = JSON.parse(body);

                callback(undefined, {
                    tiempo: data.current.observation_time,
                    clima: data.current.temperature,

                });
            }
        })
    };

module.exports = statusClima;