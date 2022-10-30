
// Naming Conventions - desafío - //

const variable = "a";

function nombre(parametro) {
    const variable = "b"
    return variable + parametro
}
console.log(nombre(variable), variable);



//////////////////////////////////


// Filosofía Unix: Hacer una cosa y hacerla bien - desafío - //

/*
- Separá esta función en partes creando una función para cada operación 
*/
function operar(num1, num2) {
    const suma = num1 + num2;
    const resta = num1 - num2;

    console.log(suma);
    console.log(resta);
};
operar(200, 100);

/*
- En lugar de crear una función que realice ambas operaciones, crea una para sumar
(usá return para devolver esta suma)
*/
function suma(num1, num2) {
    return num1 + num2;
};
/*
- Y otra función para restar (usá return para devolver esta resta)
*/
function resta(num1, num2) {
    return num1 - num2;
};
/*
- Luego, crea una función main que invoque a estas funciones y le pase los números
como parámetros
*/
function suma(num1, num2) {
    return num1 + num2;
};

function resta(num1, num2) {
    return num1 - num2;
};

// Función principal main
function main() {
    const funcionSumar = suma(200, 100);
    const funcionRestar = resta(200, 100);

    // Usá console.log() para mostrar los resultados en la terminal
    console.log(funcionSumar);
    console.log(funcionRestar);
}
main();
