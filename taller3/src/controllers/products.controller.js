import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { nombre, precio, stock, id_categoria } = req.body;

  // validating
  if (nombre == null || precio == null || id_categoria==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (stock == null) stock = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("precio", sql.Int, precio)
      .input("stock", sql.Int, stock)
      .input("id_categoria", sql.Int, id_categoria)
      .query(querys.addNewProduct);

    res.json({ nombre, precio, stock, id_categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_producto", req.params.id_producto)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_producto", req.params.id_producto)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProductById = async (req, res) => {
  const { nombre, precio, stock, id_categoria } = req.body;

  // validating
  if (nombre == null || precio == null || id_categoria==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("precio", sql.Int, precio)
      .input("stock", sql.Int, stock)
      .input("id_categoria", sql.Int, id_categoria)
      .input("id_producto", req.params.id_producto)
      .query(querys.updateProductById);
    res.json({ nombre, precio, stock, id_categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
