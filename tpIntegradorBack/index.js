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

////////////////////////////////
// Middlewares de aplicacion //

// Aplicados a nivel global para todas las solicitudes: autenticacion, registro de solicitudes o logging, analisis del cuerpo de la solicitud body parsing

// Middleware para parsear el JSON del body en peticiones POST, PUT o PATCH
app.use(express.json()); 

// Middleware CORS basico que permite todas las solicitudes
app.use(cors()); 

// Middleware logger para analizar y logear todas las solicitudes
app.use((req, res, next) => {
    // console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); En caso de no registrar la zona horaria usaremos
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});


//////////////////////////
// Middlewares de ruta //

// Middleware de ruta donde validaremos el id
const validateId = (req, res, next) => {
    const id = req.params.id; // o const { id } = req.params

    // En caso de no existir id o de que este no sea un numero
    if(!id || isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser un numero"
        })
    }

    // Convertimos el parametro id a un numero entero (integer) de base 10, decimal
    req.id = parseInt(id, 10);

    next();
}


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
app.get("/products/:id", validateId ,async (req, res) => {
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


// POST Insert product
app.post("/products", async (req, res) => {

    try {

        // Recogemos y guardamos en variables los valores que recibimos del cliente
        let { category, image, name, price } = req.body;


        if(!category || !image || !name || !price) {
            return res.status(400).json({
                message: "Datos invalidos. Asegurate de enviar categoria, imagen, nombre y precio"
            });
        }


        // Proteccion contra SQL injection, usamos placeholders ?
        let sql = `INSERT INTO products (category, image, name, price) VALUES (?, ?, ?, ?)`;

        let [rows] = await connection.query(sql, [category, image, name, price]);

        // Devolvemos informacion util del insert para devolver el ID del producto creado
        res.status(201).json({
            message: "Producto creado con exito",
            productId: rows.insertId
        });


    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        });
    }
});


// PUT Update products
app.put("/products", async (req, res) => {
    try {
        let { id, category, image, name, price } = req.body;

        // Validacion basica para comprobar que estan todos los campos
        if(!id || !category || !image || !name || !price) {
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }

        let sql = `
            UPDATE products
            SET name = ?, image = ?, price = ?, category = ?
            WHERE id = ?
        `;

        let [result] = await connection.query(sql, [name, image, price, category, id]);

        res.status(200).json({
            message: "Producto actualizado correctamente"
        });

    } catch (error) {
        console.error("Error al actualizar el producto", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        });
    }
});


// DELETE Delete product
app.delete("/products/:id", async (req, res) =>{
    try {
        let { id } = req.params;

        if(!id) {
            return res.status(400).json({
                message: "Se requiere un id para eliminar un producto"
            })
        }

        let sql = `DELETE FROM products WHERE id = ?`;

        let [result] = await connection.query(sql, [id]);

        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: `No se encontro un producto con id ${id}`
            });
        }

        return res.status(200).json({
            message: `Producto con id ${id} eliminado correctamente`
        });

    } catch (error) {
        console.error("Error en DELETE /products/:id", error);

        res.status(500).json({
            message: `Error al eliminar producto con id ${id}`, error,
            error: error.message
        });
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})