let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
    }
};

// console.log(deadpool.getNombre());
// Sin destructuring
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;


// Con destructuring
let {nombre: primerNombre, apellido, poder} = deadpool;

console.log(primerNombre, apellido, poder);