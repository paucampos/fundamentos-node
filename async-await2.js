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

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado en la BD con el ID: ${id}`);
    } else {
        return empleadoDB;
    }
};

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};

let getInfo = async (id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);
    return `${res.nombre} tiene un salario de ${res.salario}`;
}

getInfo(3)
    .then(mensaje => {console.log(mensaje)}, (err) => {
        console.log(err);
    })
    .catch(error => console.log(error));