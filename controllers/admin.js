

const connection = require('../config/db');



adminController = {};

adminController.crearAdmin=(req,res)=>{
 
    let nombre = req.body.nombre;
    //creo la query
    let sql = `INSERT INTO categoria (nombre) VALUE ('${nombre}')`;
    //ejecuto la query
    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.send('categoria creada')
    })
};

adminController.listaAdmin=(req,res)=>{

    let sql = `SELECT * FROM categoria`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
   
};

adminController.buscarCategoria=(req,res)=>{

    
    let sql = `SELECT * from categoria where id = req.params.id_categoria`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })


    res.send(req.params.id_categoria);



};

adminController.modificarAdmin=(req,res)=>{

    let categoria_id = req.params.id;
    let nombre = req.body.nombre;
  
    let sql = `UPDATE categoria SET nombre ='${nombre}' WHERE categoria_id =${categoria_id}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })

};

// categoriaController.borrarCategoria=(req,res)=>{

//     let categoria_id = req.params.id;

//     let sql = `DELETE FROM categoria WHERE categoria_id = ${categoria_id}`;
  
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send('Categoria borrada');
//     })
// };


module.exports= adminController;