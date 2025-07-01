////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { productRoutes } from "./src/api/routes/index.js";
import { loggerUrl } from "./src/api/middlewares/middlewares.js";


const app = express();
const PORT = environments.port;


//////////////////
// Middlewares //

// Middlewares de aplicacion: Aplicados a nivel global para todas las solicitudes: autenticacion, registro de solicitudes o logging, analisis del cuerpo de la solicitud body parsing
// Middleware para parsear el JSON del body en peticiones POST, PUT o PATCH
app.use(express.json()); 

// Middleware CORS basico que permite todas las solicitudes
app.use(cors()); 

// Middleware logger para analizar y logear todas las solicitudes
app.use(loggerUrl);


////////////
// Rutas //
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})