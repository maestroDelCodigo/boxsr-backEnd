const connection = require('../config/db');
let sugerenciaController = {};

sugerenciaController.crearSugerencia=(req,res) => {
    let date= new Date();
    let nombre= req.body.nombre;
    let apellidos= req.body.apellido;
    let email=req.body.email;
    let mensaje= req.body.mensaje;
    let fecha = date.getFullYear() +
        "-" +
        parseInt(date.getMonth() + 1) +
        "-" +
        0 +
        date.getDate() +
        "%";
    let fecha_creacion= date.getFullYear() +
    "-" +
    parseInt(date.getMonth() + 1) +
    "-" +
    0 +
    date.getDate() +
    "%";
  

        let sql = `INSERT INTO usuario (email, fecha_creacion, nombre, apellidos)
        VALUES ('${email}','${fecha_creacion}','${nombre}','${apellidos}')`;
        connection.query(sql, (err, result) => {
            if (err) {
            res.status(500).json({
              message: err.message, 
            }); 
          }  
          let sql2 = `INSERT INTO sugerencias (mensaje, fecha, usuario_id) VALUES ('${mensaje}', '${fecha}', '${result.insertId}')`;
          connection.query(sql2, (err, result2)=>{
              if(err) throw err
              res.json(result2)
          })

})
}
module.exports=sugerenciaController;