const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const bodyParser = require('body-parser')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    //Middlewares

    //Rutas | Endpoints
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //DIRECTORIO PUBLICO
    this.app.use(express.static("public/img/informes"));

    //Body Parser
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    //Lectura y Parseo
    this.app.use(express.json());

     //bd
     this.app.use(myconn(mysql, database, "pool"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Holiis");
    });

    this.app.use("/api/auth", require("../routes/auth"));
    this.app.use("/api/cliente", require("../routes/cliente"));
    this.app.use("/api/usuario", require("../routes/usuario"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
module.exports = Server;
