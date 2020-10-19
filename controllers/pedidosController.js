const connection = require("../config/db");

pedidosController = {};

pedidosController.crearPedido = (req, res) => {
  let estado_pago = req.body.estado_pago;
  let forma_entrega = req.body.forma_entrega;
  let iva = req.body.iva;
  let total_pedido = req.body.total_pedido;
  let estado_preparacion = req.body.estado_preparacion;
  let fecha_pedido = req.body.fecha_pedido;
  let notas = req.body.notas;

  let sql = `INSERT INTO pedido (estado_pago,forma_entrega,iva,total_pedido,estado_preparacion,fecha_pedido,notas)
 VALUES ('${estado_pago}','${forma_entrega}','${iva}','${total_pedido}', '${estado_preparacion}','${fecha_pedido}','${notas}')`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json("Pedido creado");
  });
};

pedidosController.listaPedidos = (req, res) => {
  let sql = `select * from pedido`;


  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

    let sql=`SELECT * FROM pedido JOIN usuario ON usuario.usuario_id = pedido.usuario_id`;

    connection.query(sql ,(err,result) => {
    if(err) throw err;
    res.json(result);
    //console.log(result)
    }) 
}
pedidosController.obtenerDetalle= (req, res) => {
    let pedido_id=req.body.id;

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
            console.log(result)
            res.json(result);
        }
    })

}
pedidosController.detallePedido= (req, res) => {

    let sql=`SELECT * FROM pedido JOIN usuario ON usuario.usuario_id = pedido.usuario_id WHERE pedido_id= ${req.params.id}`;

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
}

pedidosController.buscarPedido= (req, res) => {

    let sql=`SELECT * FROM pedido where pedido_id= ${req.params.id}`;

pedidosController.buscarPedido = (req, res) => {
  let sql = `SELECT * FROM pedido where pedido_id= ${req.params.id}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

pedidosController.modificarPedido = (req, res) => {
  let pedido_id = req.params.id;

  let estado_pago = req.body.estado_pago;
  let forma_entrega = req.body.forma_entrega;
  let iva = req.body.iva;
  let total_pedido = req.body.total_pedido;
  let estado_preparacion = req.body.estado_preparacion;
  let fecha_pedido = req.body.fecha_pedido;
  let notas = req.body.notas;

  let sql = `UPDATE pedido SET estado_pago ='${estado_pago}', forma_entrega='${forma_entrega}',
     iva='${iva}', total_pedido='${total_pedido}', estado_preparacion='${estado_preparacion}', fecha_pedido='${fecha_pedido}',notas= '${notas}'
     WHERE pedido_id =${pedido_id}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json("Pedido modificado");
  });
};

pedidosController.obtenerCantidad = (req, res) => {
  let pedido_id = req.params.id;

  let sql = `select sum(cantidad) as cantidad from pedido P
    inner join producto_pedido ON P.pedido_id = producto_pedido.pedido_id
    inner join producto ON producto_pedido.producto_id = producto.producto_id
    where P.pedido_id = ${pedido_id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.json(result);
    }
  });
};

pedidosController.obtenerResumen = (req, res) => {
  let pedido_id = req.params.id;

  let sql = `select sum(cantidad) as cantidad, P.estado_pago, P.forma_entrega, P.iva, P.total_pedido, P.estado_preparacion, P.fecha_pedido, P.notas from pedido P

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
        message: err.message,
      });
    } else {
      res.json(result);
    }
  });
};

pedidosController.guardarPedido = (req, res) => {
let total_pedido = req.body.total_pedido;
let notas ="TODO"
let usuario_id = req.body.usuario_id;
let sql2 = `INSERT INTO pedido (total_pedido, notas, usuario_id) 
    VALUES (${total_pedido},'${notas}',${usuario_id})`;

connection.query(sql2, (err, result2)=>{
    if(err)throw err;
    res.send(result2);

let pedido_id = result2.insertId;
  let pedido = req.body.pedido;
  pedido.forEach((element) => {
    let sql = `INSERT INTO producto_pedido (producto_id, pedido_id, cantidad) 
    VALUES (${element.producto_id},${pedido_id},${element.cantidad})`;
    connection.query(sql, (err, result) => {

      if (err) throw err;
    });
  });
})
};

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

pedidosController.obtenerProductosPedido= (req, res) => {
    let pedido_id=req.params.id;    

    let sql = `select P.producto_id, P.nombre, P.tipo_producto, P.codigo_producto, P.peso , P.stock , P.deleted, 
    P.fecha_creacion, P.precio, P.descripcion, P.descripcion_resumen, P.descripcion_sirve, 
    P.descripcion_usa, P.descripcion_ingredientes
    from producto P
    inner join producto_pedido ON P.producto_id = producto_pedido.producto_id    
    inner join pedido ON pedido.pedido_id = producto_pedido.pedido_id
    where pedido.pedido_id = ${pedido_id}`;

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

module.exports = pedidosController;
