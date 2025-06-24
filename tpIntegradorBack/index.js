////////////////////
// Importaciones //
import express from "express";
import environments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";
import cors from "cors";

const app = express();
const PORT = environments.port;


//////////////////
// Middlewares //
app.use(cors()); // Middleware CORS basico que permite todas las solicitudes


////////////
// Rutas //
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// GET products
app.get("/products", async (req, res) => {

    try { // Optimizacion 1, manejo de errores con try/catch
        let sql = `SELECT * FROM products`;
    
        // Al usar [rows] la desestructuracion extrae directamente las filas, que es el primer resultado de la consulta, esto hace el codigo mas legible y explicito
        let [rows] = await connection.query(sql);
        
        // Optimizacion 2, responder con exito, aunque no existiera ningun producto
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });

    } catch (error) {
        console.error("Error obteniendo productos", error);

        res.status(500).json({
            error: "Error interno del servidor al obtener productos"
        })
    }    
});


// GET product by id
app.get("/products/:id", async (req, res) => {
    try {
        // let id = req.params.id
        let { id } = req.params;

        // let sql = `SELECT * FROM products where id = ${id}`; // Consulta no optimizada porque permite inyeccion SQL
        let sql  = `SELECT * FROM products where id = ?`;

        let [rows] = await connection.query(sql, [id]);

        // Verificamos si se encontro el producto
        if(rows.length === 0) {
            return res.status(404).json({
                error: `No se encontro el producto con id: ${id}`
            });
        }

        res.status(200).json({
            payload: rows
        })

    } catch(error) {
        console.error(`Error obteniendo producto con id ${id}`, error.message);

        res.status(500).json({
            error: "Error interno al obtener un producto por id"
        });
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})