
const connection = require('../config/db');
const { app } = require('../app.js');

productController = {};

productController.listaProductos = (req, res) => {

    //let sql = `SELECT * FROM producto`;
    let sql = `SELECT P.producto_id, P.nombre, P.tipo_producto, P.codigo_producto, P.peso, P.stock, P.deleted, P.fecha_creacion, P.precio, path as nombre_imagen
    FROM producto as P
    LEFT JOIN imagen_producto ON P.producto_id = imagen_producto.producto_id;`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

productController.getProducto = (req, res) => {

    let sql = `SELECT * from producto where producto_id = ${req.params.id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

productController.crearProducto = (req, res) => {

let nombre=req.body.nombre;
let tipo_producto=req.body.tipo_producto;
let codigo_producto=req.body.codigo_producto;
let peso=req.body.peso;
let stock= req.body.stock;
let deleted=req.body.deleted;
let fecha_creacion=req.body.fecha_creacion;
let precio= req.body.precio;
let imagen = req.body.nombre_imagen;
    

    let sql = `INSERT INTO producto (nombre,tipo_producto,codigo_producto,peso,stock,deleted,fecha_creacion,precio) 
    VALUES ('${nombre}','${tipo_producto}', '${codigo_producto}',
    '${peso}','${stock}','${deleted}' ,'${fecha_creacion}',${precio})`;
        
    if(imagen)
    {
        connection.query(sql, (err, resultProductos) => {
                    if (err) throw err;                               
                
                    let lastId = resultProductos.insertId;                
                                                    
                    let sqlProductosImagen = `INSERT INTO imagen_producto (producto_id, path, imagen_id)
                    VALUES ('${lastId}','${imagen}', '${lastId}')`;
                    
                    connection.query(sqlProductosImagen, (err, result) => {                        
                        if (err) {                                        
                            res.status(500).json({
                                message: err.message
                            });
                        }else{
                            res.json('producto creado');
                        }                     
                       
                    })                              
                
            })
    }else {
        connection.query(sql, (err, result) => {
            if (err) throw err;
            res.json('producto creado')
        })
    }
}


// productController.eliminarProducto = (req, res) => {
//    let producto_id = req.params.id;
//     let sql = `DELETE FROM producto WHERE producto_id = ${producto_id}`;

//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('producto eliminado')
//     })

// }

productController.descatalogarProducto = (req, res) => {
    let producto_id=req.params.id;
    let descatalogarProducto = req.body.deleted;
        if (descatalogarProducto == false){
            let sql = `UPDATE  producto  SET deleted = 0
            WHERE producto_id=' ${producto_id}'`
            connection.query(sql, (err, result) => {
                  if (err) throw err;
        res.json('Producto activo');
            }) 
           
        }
        else{
            let sql = `UPDATE  producto  SET deleted = 1
          WHERE producto_id= '${producto_id}'`
          connection.query(sql, (err, result) => {
            if (err) throw err;
        res.json('Producto inactivo');
            })
           
        }
 
 }



productController.actualizarProducto = (req, res) => {

    let producto_id = req.params.id;

    let nombre=req.body.nombre;
    let tipo_producto=req.body.tipo_producto;
    let codigo_producto=req.body.codigo_producto;
    let peso=req.body.peso;
    let stock= req.body.stock;
    let deleted=req.body.deleted;
    // let fecha_creacion=req.body.fecha_creacion;
    let precio=req.body.precio;
    let imagen = req.body.nombre_imagen;
    let imagen_url = req.body.imagen_url;
       
    let sql = `UPDATE producto SET nombre='${nombre}', tipo_producto='${tipo_producto}',
    codigo_producto='${codigo_producto}', peso='${peso}',stock='${stock}',deleted=${deleted}, precio='${precio}' WHERE producto_id=${producto_id}`;
 
    if(imagen)
    {
        connection.query(sql, (err, resultProductos) => {
                    if (err) throw err;     
                    
                    let sqlDeleteImage = `DELETE FROM imagen_producto WHERE producto_id = ${producto_id}`;                    

                    connection.query(sqlDeleteImage, (err, result) => {                        
                        if (err) throw err;                                                                                  

                        let sqlProductosImagen = `INSERT INTO imagen_producto (producto_id, path, imagen_id)
                        VALUES ('${producto_id}','${imagen}', LAST_INSERT_ID())`;                      
                        
                        connection.query(sqlProductosImagen, (err, result) => {                        
                            if (err) {                                        
                                res.status(500).json({
                                    message: err.message
                                });
                            }else{
                                res.json('producto actualizado');
                            }                     
                        
                        })                                                                                              
                    })                                                               
                
            })
            //no tengo imagen pero tenia antes, la tengo q borrar.
    }else if(!imagen && imagen_url){

        connection.query(sql, (err, resultProductos) => {
            if (err) throw err;     
            
            let sqlDeleteImage = `DELETE FROM imagen_producto WHERE producto_id = ${producto_id}`;
           
            connection.query(sqlDeleteImage, (err, result) => {  
                if (err) {                                        
                    res.status(500).json({
                        message: err.message
                    });
                }else{
                    res.json('producto actualizado');
                }  
            });
        });
    }
    else
    {
        connection.query(sql, (err, result) => {
            if (err) throw err;
            res.json('producto actualizado')
        })
    }
}


module.exports = productController;