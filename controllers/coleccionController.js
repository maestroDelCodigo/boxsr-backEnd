
const connection = require('../config/db');


coleccionController = {};


coleccionController.crearColeccion=(req,res)=>{

let nombre=req.body.nombre;
let deleted=req.body.deleted;
let video_url=req.body.video_url;
let precio_rebajado=req.body.precio_rebajado;
let precio_original= req.body.precio_original;
let productos_asociados = req.body.productos_asociados;
let descripcion = req.body.descripcion;
let descripcion_sirve = req.body.descripcion_sirve;
let descripcion_usa = req.body.descripcion_usa;
let descripcion_ingredientes = req.body.descripcion_ingredientes;
let imagen = req.body.nombre_imagen;

let sql = `INSERT INTO coleccion (nombre,deleted,video_url,precio_rebajado,precio_original, descripcion, descripcion_sirve, descripcion_usa, descripcion_ingredientes)
 VALUES ('${nombre}','${deleted}','${video_url}',${precio_rebajado}, ${precio_original}, '${descripcion}', '${descripcion_sirve}', '${descripcion_usa}', '${descripcion_ingredientes}')`;

 if(imagen)
 {
        connection.query(sql, (err, resultColecciones) => {
            if (err) throw err;                               
        
            const lastId = resultColecciones.insertId;                
                                            
            let sqlColeccionesImagen = `INSERT INTO imagen_coleccion (coleccion_id, path)
            VALUES ('${lastId}','${imagen}')`;
            
            connection.query(sqlColeccionesImagen, (err, result) => {        
                if (err) throw err; 
                
                let sqlProductos = `INSERT INTO producto_coleccion (producto_id, coleccion_id, cantidad )
                VALUES ('${productos_asociados[0]}','${lastId}', 0)`;

                console.log(sqlProductos);
        
                if(productos_asociados.length > 1)
                {
                    for(let i= 1; i < productos_asociados.length; i++ )
                    {
                        sqlProductos = sqlProductos + `,('${productos_asociados[i]}','${lastId}', 0)`
                    }
                }    
        
                connection.query(sqlProductos, (err, result) => {
                    if (err) {            
                        res.status(500).json({
                            message: err.message
                        });
                    }    
                
                    res.json(result)
                })                  
            
            })                              
        
    })
 }
 else{
    // https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628
    connection.query(sql, (err, result) => {
        if (err) throw err;    
        
        let sqlProductos = `INSERT INTO producto_coleccion (producto_id, coleccion_id, cantidad )
        VALUES ('${productos_asociados[0]}','${result.insertId}', 0)`;

        if(productos_asociados.length > 1)
        {
            for(let i= 1; i < productos_asociados.length; i++ )
            {
                sqlProductos = sqlProductos + `,('${productos_asociados[i]}','${result.insertId}', 0)`
            }
        }    

        connection.query(sqlProductos, (err, result) => {
            if (err) {            
                res.status(500).json({
                    message: err.message
                });
            }    
        
            res.json(result)
        })  
    })
    }

}

coleccionController.listaColecciones=(req,res)=>{

    // let sql = `SELECT * FROM coleccion`;

    let sql = `SELECT C.coleccion_id, C.nombre, C.deleted, C.video_url, C.precio_rebajado, C.precio_original, C.descripcion, C.descripcion_sirve, C.descripcion_usa, C.descripcion_ingredientes, path as nombre_imagen
    FROM coleccion as C
    LEFT JOIN imagen_coleccion ON C.coleccion_id = imagen_coleccion.coleccion_id`;


    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

coleccionController.buscarColeccion=(req,res)=>{

    // let sql = `SELECT * from coleccion where coleccion_id = ${req.params.id}`;
    let sql = `SELECT C.coleccion_id, C.nombre, C.deleted, C.video_url, C.precio_rebajado, C.precio_original, C.descripcion, C.descripcion_sirve, C.descripcion_usa, C.descripcion_ingredientes, path as nombre_imagen
    FROM coleccion as C
    LEFT JOIN imagen_coleccion ON C.coleccion_id = imagen_coleccion.coleccion_id
    where coleccion_id = ${req.params.id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
       res.json('Colección')
    })

 }

coleccionController.modificarColeccion=(req,res)=>{

    let coleccion_id=req.params.id;

    let nombre=req.body.nombre;
    let deleted=req.body.deleted;
    let video_url=req.body.video_url;
    let precio_rebajado=req.body.precio_rebajado;
    let precio_original= req.body.precio_original;
    let productos_asociados = req.body.productos_asociados;
    let descripcion = req.body.descripcion;
    let descripcion_sirve = req.body.descripcion_sirve;
    let descripcion_usa = req.body.descripcion_usa;
    let descripcion_ingredientes = req.body.descripcion_ingredientes;

    let imagen = req.body.nombre_imagen;
    let imagen_url = req.body.imagen_url;
    
  
    let sql = `UPDATE coleccion SET nombre ='${nombre}', deleted=${deleted},
     video_url='${video_url}', precio_rebajado=${precio_rebajado}, precio_original=${precio_original}, descripcion = '${descripcion}', descripcion_sirve = '${descripcion_sirve}', descripcion_usa = '${descripcion_usa}', descripcion_ingredientes = '${descripcion_ingredientes}'
     WHERE coleccion_id =${coleccion_id}`;

    if(imagen)
    {
        connection.query(sql, (err, resultProductos) => {
            if (err) throw err;     
            
            let sqlDeleteImage = `DELETE FROM imagen_coleccion WHERE coleccion_id = ${coleccion_id}`;                    

            connection.query(sqlDeleteImage, (err, result) => {                        
                if (err) throw err;                                                                                  
                let sqlColeccionesImagen = `INSERT INTO imagen_coleccion (coleccion_id, path)
                VALUES ('${coleccion_id}','${imagen}')`;    
                
                connection.query(sqlColeccionesImagen, (err, result) => {     
                    
                    if (err) throw err;                                                                    
                    // borrar los productos de esa coleccion 

                    let sqlBorrarAsociados = `DELETE FROM producto_coleccion WHERE coleccion_id = ${coleccion_id}`; 

                    connection.query(sqlBorrarAsociados, (err, result) => {
                        if (err) {            
                            return res.status(500).json({
                                message: err.message
                            });
                        }

                        let sqlProductos = `INSERT INTO producto_coleccion (producto_id, coleccion_id, cantidad )
                        VALUES ('${productos_asociados[0]}','${coleccion_id}', 0)`;

                        if(productos_asociados.length > 1)
                        {
                            for(let i= 1; i < productos_asociados.length; i++ )
                            {
                                sqlProductos = sqlProductos + `,('${productos_asociados[i]}','${coleccion_id}', 0)`
                            }
                        }    

                        connection.query(sqlProductos, (err, result) => {
                            if (err) {            
                                res.status(500).json({
                                    message: err.message
                                });
                            }

                            res.json('Coleccion modificada')
                        });
                                                            
                    });                                
                
                })  
                
            })
        })
    } 
    //no tengo imagen pero tenia antes, la tengo q borrar.
    else if(!imagen && imagen_url){
        connection.query(sql, (err, resultProductos) => {
            if (err) throw err;     
            
            let sqlDeleteImage = `DELETE FROM imagen_coleccion WHERE coleccion_id = ${coleccion_id}`;
           
            connection.query(sqlDeleteImage, (err, result) => {  
                if (err) throw err;    

                 // borrar los productos de esa coleccion 

                 let sqlBorrarAsociados = `DELETE FROM producto_coleccion WHERE coleccion_id = ${coleccion_id}`; 

                 connection.query(sqlBorrarAsociados, (err, result) => {
                     if (err) {            
                         return res.status(500).json({
                             message: err.message
                         });
                     }

                     let sqlProductos = `INSERT INTO producto_coleccion (producto_id, coleccion_id, cantidad )
                     VALUES ('${productos_asociados[0]}','${coleccion_id}', 0)`;

                     if(productos_asociados.length > 1)
                     {
                         for(let i= 1; i < productos_asociados.length; i++ )
                         {
                             sqlProductos = sqlProductos + `,('${productos_asociados[i]}','${coleccion_id}', 0)`
                         }
                     }    

                     connection.query(sqlProductos, (err, result) => {
                         if (err) {            
                             res.status(500).json({
                                 message: err.message
                             });
                         }

                         res.json('Coleccion modificada')
                     });
                                                         
                 });                 

            });
        });
    }
    else
    {

        connection.query(sql, (err, result) => {
            if (err) { 
                return res.status(500).json({
                message: err.message
                });
            }
            
            // borrar los productos de esa coleccion 

            let sqlBorrarAsociados = `DELETE FROM producto_coleccion WHERE coleccion_id = ${coleccion_id}`; 

            connection.query(sqlBorrarAsociados, (err, result) => {
                if (err) {            
                    return res.status(500).json({
                        message: err.message
                    });
                }

                let sqlProductos = `INSERT INTO producto_coleccion (producto_id, coleccion_id, cantidad )
                VALUES ('${productos_asociados[0]}','${coleccion_id}', 0)`;

                if(productos_asociados.length > 1)
                {
                    for(let i= 1; i < productos_asociados.length; i++ )
                    {
                        sqlProductos = sqlProductos + `,('${productos_asociados[i]}','${coleccion_id}', 0)`
                    }
                }    

                connection.query(sqlProductos, (err, result) => {
                    if (err) {            
                        res.status(500).json({
                            message: err.message
                        });
                    }

                    res.json('Coleccion modificada')
                });
                                                    
            });
                
        });
    }
}


coleccionController.inactivarColeccion=(req,res)=>{
    let coleccion_id=req.params.id;
    let inactivarColeccion = req.body.deleted;
        if (inactivarColeccion == false){
            let sql = `UPDATE  coleccion  SET deleted = 0
            WHERE coleccion_id=' ${coleccion_id}'`
            connection.query(sql, (err, result) => {
                  if (err) throw err;
        res.json('Coleccion activa');
            }) 
           
        }
        else{
            let sql = `UPDATE  coleccion  SET deleted = 1
          WHERE coleccion_id= '${coleccion_id}'`
          connection.query(sql, (err, result) => {
            if (err) throw err;
        res.json('Coleccion inactiva');
            })
           
        }
    }

coleccionController.obtenerProductosAsociados= (req,res) =>{

    let coleccion_id=req.params.id;
    
    let sql = `SELECT *
    FROM producto_coleccion A
    JOIN producto B  ON B.producto_id=A.producto_id
    where A.coleccion_id = ${coleccion_id}`;


    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        }        
        
        //envio un json como respuesta
        res.json(result);
    }) 
}


// coleccionController.borrarColeccion=(req,res)=>{

//     let coleccion_id = req.params.id;

//     let sql = `DELETE FROM coleccion WHERE coleccion_id = ${coleccion_id}`;
    
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Coleccion borrada');
//     })
   
// }


module.exports= coleccionController;