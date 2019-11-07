// setTimeout( () => console.log('Hola mundo'), 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Test',
        // id: id,
        id
    };
    if (id === 20) {
        callback('Usuario con id 20 no existe en la bd');
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    } 
    console.log('Usuario de base de datos:', usuario);
});
