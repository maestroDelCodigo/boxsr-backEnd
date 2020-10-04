let jwt = require('jsonwebtoken');
let secret = process.env.KEY_TOKEN;

function verify(req, res, next) {

    const token = req.header('token');
    console.log(token)
    if (!token) {
        res.json('no hay token')
    }
    next();

}


module.exports = verify;