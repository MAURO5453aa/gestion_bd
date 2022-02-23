use facturacion
begin tran 
update productos set stock= precio *1.15
from productos p
join categorias c on p.id_categoria = c.id_categoria
where c.nombre <> 'Ferreteria'
commit tran 

