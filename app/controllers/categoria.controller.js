

const connection = require('../../config/db');
let sha1 = require('sha1');

exports.crearCategoria=(req,res)=>{
    if(!req.body.content) {
        return res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
    }
    let id_categoria = req.params.id_categoria;
    let nombre = req.params.nombre;
    //creo la query
    let sql = `INSERT INTO categoria (id_categoria,nombre) VALUES ('${id_categoria}','${nombre}')`;
    //ejecuto la query
    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.send('ok')
    })
};

exports.listaCategorias=(req,res)=>{
    let sql = `SELECT * FROM categoria`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
   
};

exports.buscarCategoria=(req,res)=>{

    
    let sql = `SELECT * from categoria where id = req.params.id_categoria`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })


    res.send(req.params.id_categoria);



};

exports.modificarCategoria=(req,res)=>{

    let id_categoria = req.params.id_categoria;
    let nombre = req.body.nombre;
  
    let sql = `UPDATE categoria SET nombre = '${nombre}' WHERE id_categoria = ${id_categoria}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })

};

exports.borrarCategoria=(req,res)=>{

    let id_categoria = req.params.id;

    let sql = `DELETE * FROM categoria WHERE id_categoria = ${id_categoria}`;
  
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Categoria borrada');
    })
};
