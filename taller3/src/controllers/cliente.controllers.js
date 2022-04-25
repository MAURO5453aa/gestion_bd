import { getConnection, querys, sql } from "../database";

export const getClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllClientes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewCliente = async (req, res) => {
  const { nombre, apellido, direccion, fecha_nacimiento,telefono,email } = req.body;

  // validating
  if (nombre == null || apellido == null || direccion==null ||fecha_nacimiento==null||telefono==null || email==null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (stock == null) stock = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("direccion", sql.Int, direccion)
      .input("fecha_nacimiento", sql.Int,fecha_nacimiento)
      .input("telefono", sql.Int, telefono)
      .input("email", sql.Int, email)
      .query(querys.addNewclientes);

    res.json({ nombre, apellido, direccion, fecha_nacimiento, telefono, email });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientesById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_cliente", req.params.id_cliente)
      .query(querys.getClientesById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteClientes= async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_cliente", req.params.id_cliente)
      .query(querys.deleteClientes);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateClietesById = async (req, res) => {
  const { nombre, apellido, direccion, fecha_nacimiento,telefono,email } = req.body;

  // validating
  if (nombre == null || apellido == null || direccion==null ||fecha_nacimiento==null||telefono==null || email==null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("direccion", sql.Int, direccion)
      .input("fecha_nacimiento", sql.Int,fecha_nacimiento)
      .input("telefono", sql.Int, telefono)
      .input("email", sql.Int, email)
      .query(querys.updateClietesById);
    res.json({ nombre, apellido, direccion, fecha_nacimiento,telefono, email  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
