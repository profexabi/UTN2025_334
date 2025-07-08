import Product from "../models/product.models.js";

// Traer todos los productos
export const getAllProducts = async (req, res) => {
    
    try { // Las operaciones asincronas pueden fallar, y nos interesa capturar los posibles errores
        
        const [rows] = await Product.selectAllProducts();

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Se encontraron los productos"
        });


    } catch(error) {
        console.error("Error obteniendo productos", error.message);

        // El bloque catch debe responderle al cliente
        res.status(500).json({
            error: "Error interno al obtener productos"
        });
    }
}


// Traer producto por id
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const [rows]  = await Product.selectProductFromId(id);

        if(rows.length === 0) {
            return res.status(404).json({
                error: `No se encontro producto con id ${id}`
            })
        }

        res.status(200).json({
            payload: rows
        });


    } catch(error) {
        console.error(`Error obteniendo producto con id ${id}`, error.message);

        res.status(500).json({
            error: "Error interno al obtener un producto por id"
        });
    }
}