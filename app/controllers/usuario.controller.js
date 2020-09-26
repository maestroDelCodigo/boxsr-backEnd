exports.crear=(req,res)=>{
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
    }

//TODO: INSERT INTO 

// let name_phone = req.body.name_phone
// let number_phone = req.body.number_phone
// let color_phone = req.body.color_phone
// let size_phone = req.body.size_phone
// let resolution = req.body.resolution

// //creo la query
// let sql = `INSERT INTO phone (name_phone,number_phone,color_phone,size_phone,resolution) VALUES
    
//     ('${name_phone}','${number_phone}','${color_phone}', '${size_phone}', '${resolution}')`;

// //ejecuto la query
// connection.query(sql, (err, result) => {
//     if (err) throw err;

//     res.send('ok')
// })

    res.send('ok');
};

exports.lista=(req,res)=>{

    // let sql = `SELECT * FROM usuarios`;

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })
    
    const usuarios = [{
        nombre: 'paco',
        apellido: 'jaime'
    },
    {
        nombre: 'noe',
        apellido: 'sanz'
    }
]    

    res.json(usuarios);
};

exports.buscarUsuario=(req,res)=>{

    
    // let sql = `SELECT * from usuarios where id = req.params.usuarioId`;

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })


    res.send(req.params.usuarioId);



};

exports.modificar=(req,res)=>{

    // let id_phone = req.params.id_phone;

    // let name_phone = req.body.name_phone
    // let number_phone = req.body.number_phone
    // let color_phone = req.body.color_phone
    // let size_phone = req.body.size_phone
    // let resolution = req.body.resolution

    // let sql = `UPDATE phone SET name_phone = '${name_phone}', 
    // number_phone= '${number_phone}', color_phone= '${color_phone}',
    // size_phone= '${size_phone}',resolution= '${resolution}' WHERE id_phone = ${id_phone}`;

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })

};

exports.borrar=(req,res)=>{

    let idUsuario = req.params.usuarioId;

    // let sql = `DELETE FROM phone WHERE id_phone = ${id_phone}`;
    // //ejecutamos la query para eliminar
    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.send('Delete phone');
    // })

};
