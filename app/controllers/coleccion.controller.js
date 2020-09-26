exports.crear=(req,res)=>{
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
    }
    res.send('ok');
};

exports.lista=(req,res)=>{

    // let sql = `SELECT * FROM colection`;

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })
    
    const coleccion = [{
        nombre: 'Box godd face',
        productos: '1 serum vitamina c , 2 contorno de ojos , 3 crema hidratante',
        precio: '69,95€',
    },
   
]    

    res.json(coleccion);
};

exports.buscarColeccion=(req,res)=>{

    
    // let sql = `SELECT * from coleccion where id = req.params.coleccionId`;

    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })


    res.send(req.params.coleccionId);



};

exports.modificar=(req,res)=>{

    const coleccion = {
        nombre : req.body.name,
        productos : req.body.productos,
        precio : req.body.precio
    }


    res.send(coleccion);

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

    let idColeccion = req.params.coleccionId;

    // let sql = `DELETE FROM coleccion WHERE id_coleccion = ${id_coleccion}`;
    // //ejecutamos la query para eliminar
    // connection.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.send('Delete coleccion');
    // })
    res.send('Delete coleccion')

};
