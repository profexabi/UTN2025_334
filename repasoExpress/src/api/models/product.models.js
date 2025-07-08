import connection from "../database/db.js";

// Seleccionar todos los productos
const selectAllProducts = async () => {
    const sql = "SELECT * FROM products";
    return await connection.query(sql);
}

// Seleccionar producto por id
const selectProductFromId = async (id) => {
    let sql = `SELECT * FROM products where id = ?`;
    return await connection.query(sql, [id]);
}



export default {
    selectAllProducts,
    selectProductFromId
}