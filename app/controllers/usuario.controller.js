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