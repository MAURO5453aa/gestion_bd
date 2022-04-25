export const querys = {
  getAllProducts: "SELECT * FROM [facturacion].[dbo].[productos]",
  getProducById: "SELECT * FROM productos Where id_producto = @id_producto",
  addNewProduct:
    "INSERT INTO [facturacion].[dbo].[productos] (nombre, precio, stock, id_categoria) VALUES (@nombre,@precio,@stock@id_categoria);",
  deleteProduct: "DELETE FROM [facturacion].[dbo].[productos] WHERE id_producto= @id_producto",
  updateProductById:
    "UPDATE [facturacion].[dbo].[productos] SET Name = @nombre, precio = @precio, stock = @stock, id_categoria = @id_categoria WHERE id_producto = @id_producto",
};
