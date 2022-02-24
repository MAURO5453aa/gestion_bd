--punto 1----------------------
use facturacion
begin tran 
update productos set stock= precio *1.15
from productos p
join categorias c on p.id_categoria = c.id_categoria
where c.nombre <> 'Ferreteria'
commit tran 

--punto 2--------------------
begin tran 
update productos set precio = p.precio -(p.precio*0.22)
from productos p
join detalles d on p.id_producto=d.id_producto
join facturas f on d.id_factura=f.num_factura
join  modo_pagos mp on mp.num_pago = f.num_pago
where mp.nombre = 'Bitcoin'
commit tran 


--punto 3-------------------------
begin tran
delete clientes 
from clientes cl 
left join facturas p on p.id_cliente = cl.id_cliente 
where num_factura is null
commit tran

rollback

select * from clientes cl
left join facturas p on p.id_cliente = cl.id_cliente

--punto 4-----------------
begin tran
update productos set stock = stock+1 
from productos p 
join detalles d on p.id_producto=d.id_producto
join facturas f on d.id_factura=f.num_factura
join  modo_pagos mp on mp.num_pago = f.num_pago
where p.nombre like 'c%' and mp.nombre <> 'tarjeta débito'
commit tran

--punto 5 ------------------------
