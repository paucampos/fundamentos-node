
// con async se transforma a promesa
let getNombre = async () => {
    return 'Pedro';
}

// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Juan');
//         }, 3000);
//     });
// };

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

saludo()
    .then(saludo => {
        console.log(saludo);
    })
    .catch(error => {
        console.log('Error en async', error);
    });