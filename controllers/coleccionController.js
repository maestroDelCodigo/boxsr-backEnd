
const connection = require('../config/db');


coleccionController = {};


coleccionController.crearColeccion=(req,res)=>{

let nombre=req.body.nombre;
let deleted=req.body.deleted;
let video_url=req.body.video_url;
let precio_rebajado=req.body.precio_rebajado;
let precio_original= req.body.precio_original;

let sql = `INSERT INTO coleccion (nombre,deleted,video_url,precio_rebajado,precio_original)
 VALUES ('${nombre}','${deleted}','${video_url}',${precio_rebajado}, ${precio_original})`;

  
 connection.query(sql, (err, result) => {
    if (err) throw err;
    res.json('Colección creada')
})
}

coleccionController.listaColecciones=(req,res)=>{

    let sql = `SELECT * FROM coleccion`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

coleccionController.buscarColeccion=(req,res)=>{

    let sql = `SELECT * from coleccion where coleccion_id = ${req.params.id}`;

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
    
  
    let sql = `UPDATE coleccion SET nombre ='${nombre}', deleted=${deleted},
     video_url='${video_url}', precio_rebajado=${precio_rebajado}, precio_original=${precio_original} 
     WHERE coleccion_id =${coleccion_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json('Coleccion modificada')
    })

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


// coleccionController.borrarColeccion=(req,res)=>{

//     let coleccion_id = req.params.id;

//     let sql = `DELETE FROM coleccion WHERE coleccion_id = ${coleccion_id}`;
    
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Coleccion borrada');
//     })
   
// }


module.exports= coleccionController;