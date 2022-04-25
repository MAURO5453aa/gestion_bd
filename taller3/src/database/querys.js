export const querys = {
  getAllProducts: "SELECT * FROM [facturacion].[dbo].[productos]",
  getProducById: "SELECT * FROM productos Where id_producto = @id_producto",
  addNewProduct:
    "INSERT INTO [facturacion].[dbo].[productos] (nombre, precio, stock, id_categoria) VALUES (@nombre,@precio,@stock@id_categoria);",
  deleteProduct: "DELETE FROM [facturacion].[dbo].[productos] WHERE id_producto= @id_producto",
  updateProductById:
    "UPDATE [facturacion].[dbo].[productos] SET Name = @nombre, precio = @precio, stock = @stock, id_categoria = @id_categoria WHERE id_producto = @id_producto",


  getAllClientes: "SELECT * FROM  [facturacion].[dbo].[clientes]",
  getClientesById: "SELECT * FROM clientes Where id_cliente = @id_cliente",
  addNewClientes:
    "INSERT INTO  [facturacion].[dbo].[clientes] (nombre, apellido, direccion, fecha_nacimiento,telefono,email) VALUES (@nombre,@apellido,@direccion,@fecha_nacimiento,@telefono,@email);",
  deleteClientes: "DELETE FROM [facturacion].[dbo].[clientes] WHERE id_cliente= @id_cliente",
  updateClietesById:
    "UPDATE [facturacion].[dbo].[clientes] SET Name = nombre = @nombre, apellido = @apellido, direccion = @direccion, fecha_nacimiento = @fecha_nacimiento, telefono = @telefono, email = @email",
};
