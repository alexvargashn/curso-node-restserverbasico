require('dotenv').config()

const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath ='/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de la aplicación

        this.routs();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routs() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;