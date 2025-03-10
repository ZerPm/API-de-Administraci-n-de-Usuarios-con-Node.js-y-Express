const jwt = require('jsonwebtoken');
const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ uid }, process.env.SECRET_KEY, { expiresIn: '4h' }, (err, token) => {
            if (err) reject('No se pudo generar el token');
            else resolve(token);
        });
    });
};
module.exports = { generarJWT };
