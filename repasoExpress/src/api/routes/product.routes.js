import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/product.controllers.js";

const router = Router();

////////////
// Rutas //

// La ruta solo tiene que llamar al controlador, que es el que se encaga de las peticiones y respuestas

// Get all products
router.get("/", getAllProducts); 


// Get products by id
router.get("/:id", getProductById);

export default router;