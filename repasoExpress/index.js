////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";
import { productRoutes } from "./src/api/routes/index.js";



//////////////////////
// Configuraciones //
const app = express(); // Inicializamos express para poder usar todos los metodos que nos proporciona
const PORT = environments.port;



//////////////////
// Middlewares //
// Middleware CORS basico que permite todas las solicitudes
app.use(cors());

// Middleware para parsear el JSON de las solicitudes POST y PUT
app.use(express.json()); 

// Middleware de aplicacion (Logger) para registrar por consola fecha, peticion y url
app.use(loggerUrl);



////////////
// Rutas //
app.use("/api/products", productRoutes)



//////////////////////////////
// Inicializar el servidor //
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})