const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { database } = require("../database/key");
const myconn = require("express-myconnection");
const multer = require("multer");

const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/img/logo_cancha"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    //    },
    //     filename: function (req, file, cb) {
    //       cb(null, file.fieldname + '-' + Date.now())
  }
});

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.port = process.env.PORT;
    this.authPath = "/api/auth";

    //Middlewares
    this.middlewares();

    //Rutas | Endpoints
    this.routes();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    // this.app.use(passport.initialize());
    // this.app.use(passport.session());
    //this.app.use(cookieParser());
    this.app.use(express.static("public/img"));

    //Body Parser
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    //CORS

    //Lectura y Parseo
    this.app.use(express.json());
    this.app.use(function (req, res, next) {
      //this.app.locals = req.user;
      next();
    });
    
    
    // /**-----------------------MULTER - UPLOAD FILE-----------------------**/
    //  /**--------------------------------------------------------------------**/
    //  const storage = multer.diskStorage({
    //   destination: path.join(__dirname, "../public/img/informes"),
    //   filename: (req, file, cb) => {
    //     cb(null, file.originalname);
    //     //    },
    //     //     filename: function (req, file, cb) {
    //     //       cb(null, file.fieldname + '-' + Date.now())
    //   },
    // });
    // const upload = multer({ storage });
    // this.app.use(
    //   multer({
    //     storage,
    //     dest: path.join(__dirname, "../public/img/informes"),
    //     fileFilter: (req, file, cb) => {
    //       const fileTypes = /jpg/;
    //       const mimetype = fileTypes.test(file.mimetype);
    //       const extname = fileTypes.test(path.extname(file.originalname));
    //       if (mimetype && extname) {
    //         return cb(null, true);
    //       }
    //       cb("El archivos debe ser un Formato válido");
    //     },
    //   }).single("file")
    // );
    // /**--------------------------------------------------------------------**/
    // /**--------------------------------------------------------------------**/
  
    //bd
    this.app.use(myconn(mysql, database, "pool"));

    //directorio publico
    this.app.use(express.static('public'));
  
  }

  routes() {
    this.app.use("/api/auth", require("../routes/auth"));
    this.app.use("/api/jugador", require("../routes/jugador"));
    this.app.use("/api/usuario", require("../routes/usuario"));
    this.app.use("/api/cancha", require("../routes/cancha"));
    this.app.use("/api/turnos", require("../routes/turno"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriento Puerto", process.env.PORT);
    });
  }
}

module.exports = Server;
