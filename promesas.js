let empleados = [{
    id: 1,
    nombre: 'Pedro'
},
{
    id: 2,
    nombre: "Juan"
},
{
    id: 3,
    nombre: "Diego"
}];

let salarios = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado en la BD con el ID: ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

// getEmpleado(10).then(empleado => {
//     console.log('Empleado de DB', empleado);
// }, (err) => {
//     console.log(err);
// });

getEmpleado(3)
    .then(empleado => {
        getSalario(empleado)
            .then(salario => console.log(`El salario de ${empleado.nombre} es de ${salario.salario}`)
                , (err) => console.log(err));
    }, (err) => console.log(err));

