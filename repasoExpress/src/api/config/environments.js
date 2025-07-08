// Importamos el modulo dotenv
import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// TODO, ojo con name porque la conexion de mysql2 requiere pasar ese valor como databse
export default {
    port: process.env.PORT || 5000,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}