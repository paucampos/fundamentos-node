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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        callback(`No existe el empleado en la BD con el ID: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${empleado.nombre} es de ${salario.salario}`);
    })
});


