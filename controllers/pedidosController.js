
const connection = require('../config/db');


pedidosController = {};


pedidosController.crearPedido = (req, res) => {

let estado_pago=req.body.estado_pago;
let forma_entrega=req.body.forma_entrega;
let iva=req.body.iva;
let total_pedido=req.body.total_pedido;
let estado_preparacion=req.body.estado_preparacion;
let fecha_pedido=req.body.fecha_pedido;
let notas=req.body.notas;



let sql = `INSERT INTO pedido (estado_pago,forma_entrega,iva,total_pedido,estado_preparacion,fecha_pedido,notas)
 VALUES ('${estado_pago}','${forma_entrega}','${iva}','${total_pedido}', '${estado_preparacion}','${fecha_pedido}','${notas}')`;

 connection.query( sql, (err, result)=>{
     if(err) throw err;
     res.json('Pedido creado');
 })

  
}


pedidosController.listaPedidos = (req, res) => {

let sql= `select * from pedido`;

connection.query(sql ,(err,result) => {
    if(err) throw err;
    res.json(result);
    }) 
}


pedidosController.buscarPedido= (req, res) => {

    let sql=`SELECT * FROM pedido where pedido_id= ${req.params.id}`;

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
}


pedidosController.modificarPedido= (req, res) => {

    let pedido_id=req.params.id;

    let estado_pago=req.body.estado_pago;
    let forma_entrega=req.body.forma_entrega;
    let iva=req.body.iva;
    let total_pedido=req.body.total_pedido;
    let estado_preparacion=req.body.estado_preparacion;
    let fecha_pedido=req.body.fecha_pedido;
    let notas=req.body.notas;
   
    let sql = `UPDATE pedido SET estado_pago ='${estado_pago}', forma_entrega='${forma_entrega}',
     iva='${iva}', total_pedido='${total_pedido}', estado_preparacion='${estado_preparacion}', fecha_pedido='${fecha_pedido}',notas= '${notas}'
     WHERE pedido_id =${pedido_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json('Pedido modificado')
    })
}


pedidosController.obtenerCantidad= (req, res) => {

    let pedido_id=req.params.id;

   
    let sql = `select sum(cantidad) as cantidad from pedido P
    inner join producto_pedido ON P.pedido_id = producto_pedido.pedido_id
    inner join producto ON producto_pedido.producto_id = producto.producto_id
    where P.pedido_id = ${pedido_id}`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.json(result);
        }
    })
}

pedidosController.obtenerDetalle= (req, res) => {
    let pedido_id=req.params.id;    

    let sql = `select sum(cantidad) as cantidad, P.estado_pago, P.forma_entrega, P.iva, P.total_pedido, P.estado_preparacion, P.fecha_pedido, P.notas , 
	usuario.nombre, usuario.apellidos, usuario.email, usuario.registrado, usuario.suscriptor, usuario.usuario_id
    from pedido P
    inner join producto_pedido ON P.pedido_id = producto_pedido.pedido_id
    inner join producto ON producto_pedido.producto_id = producto.producto_id
    inner join usuario ON P.usuario_id = usuario.usuario_id
    where P.pedido_id = ${pedido_id}`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        }
        else{
            res.json(result);
        }
    })
}



// pedidosController.eliminarPedido= (req, res) => {
//     let pedido_id= req.params.id;

//         let sql = `DELETE FROM pedido WHERE pedido_id = ${pedido_id}`;
        
//         connection.query(sql, (err, result) => {
//             if (err) throw err;
//             res.send('Pedido Eliminado');
//         })

// }




module.exports=pedidosController;


