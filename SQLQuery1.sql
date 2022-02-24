punto 1----------------------
use facturacion
begin tran 
update productos set stock= precio *1.15
from productos p
join categorias c on p.id_categoria = c.id_categoria
where c.nombre <> 'Ferreteria'
commit tran 


punto 3-------------------------
begin tran
delete clientes 
from clientes cl 
left join facturas p on p.id_cliente = cl.id_cliente 
where num_factura is null
commit tran
