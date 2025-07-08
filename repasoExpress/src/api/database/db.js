import mysql from "mysql2/promise";
import environments from "../config/environments.js";

const { database } = environments;

// TODO, ojo con pasarle la clave database a createPool (con name falla)
const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

export default connection;