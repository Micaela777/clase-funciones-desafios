
// -------     DESAFÍO PARA LA SECCIÓN -PARÁMETROS-     ------- //

/*
Operemos con parámetros
- Declará una función que reciba 3 parámetros numéricos 
*/
function unaFuncion(param1, param2, param3) { };

// Constante que invoca a la función y le pasa los números
const resultado = unaFuncion(10, 7, 9);

/*
- Devolvé con Return la suma de estos parámetros  
*/
function unaFuncion(param1, param2, param3) {
    return param1 + param2 + param3;
};
const resultado = unaFuncion(10, 7, 9);

// Usá console.log() para imprimir el resultado
console.log(resultado);

/*
- Ahora cambiá el valor de 1 parámetro recibido dentro de la función, y volvé a imprimir
el resultado en al terminal
*/
function unaFuncion(param1, param2, param3) {
    param2 = 200;
    return param1 + param2 + param3;
};
const resultado = unaFuncion(10, 7, 9);

// Usá console.log() para imprimir el resultado
console.log(resultado);



// -------     DESAFÍO PARA LA SECCIÓN -RETURN-     ------- //

/*
Generemos un saludo usando Return y mostrémolso en la terminal
- Declará una función que reciba como parámetro un nombre
*/
function unaFuncionParaSaludar(nombre) { };

// Constante que invoca la función y le pasa el nombre
const respuesta = unaFuncionParaSaludar("Mónica");

/*
- Dentro de esta función declará una variable con un saludo, y concatenala con el 
nombre usando Return
*/
function unaFuncionParaSaludar(nombre) {
    var saludo = "¡Hola!";
    return saludo + nombre;
};

const respuesta = unaFuncionParaSaludar("Mónica");

// Usá console.log() para imprimir la respuesta en la terminal
console.log(respuesta);

/*
- Ahora, fijate que pasa si solo invocás a la función pasándole un valor, más no 
la imprimís usando console.log() como hicimos previamente (En la terminal no se va a
mostrar nada)
*/
function unaFuncionParaSaludar(nombre) {
    var saludo = "¡Hola!";
    return saludo + nombre;
};
unaFuncionParaSaludar("Mónica");



// -------  DESAFÍO PARA LA SECCIÓN -CÓMO SEPARAR UN PROGRAMA EN SECCIONES-  ------- //

/*
Para este desafío usemos como ejemplo el desafío anterior
- Declará una función que reciba como parámetro un nombre
*/
function unaFuncionParaSaludar(nombre) { };
/*
- Dentro de esta función declará una variable con un saludo, y concatenala con el 
nombre recibido usando Return
*/
function unaFuncionParaSaludar(nombre) {
    var saludo = "¡Hola!";
    return saludo + nombre;
};
/*
- Ahora, declará una función main que invoque a esta otra función dentro de una
constante
*/
function main() {
    const invocaLaFuncion = unaFuncionParaSaludar("Mónica");

    //Usá console.log() para imprimir el resultado 
    console.log(invocaLaFuncion);
};
// No te olvides de invocar a esta función principal main usando main()
main();

/*
- También probrá con sólo invocar a la función unaFunciónParaSaludar dentro de main,
sin guardarla en una constante ni usando console.log(), y volvé a ver lo que pasa
(No se va a mostrar nada en la terminal)
*/
function unaFuncionParaSaludar(nombre) {
    var saludo = "¡Hola!";
    return saludo + nombre;
};
function main() {
    unaFuncionParaSaludar("Mónica");
};
// No te olvides de invocar a esta función principal main usando main()
main();



// -------     DESAFÍO PARA LA SECCIÓN -CALLBACKS-     ------- //

/*
Usemos un CallBack para mostrar nuestro nombre en la terminal
- Declará una función callback que reciba 1 parámetro, el cual será nuestro nombre
*/
function unCallback(parametro) { };
/*
-Dentro de esta función callback, usá console.log() para imprimir este parámetro 
recibido
*/
function unCallback(parametro) {
    console.log("Mi nombre es", parametro);
};
/*
- Declará una función main que reciba 1 parámetro, que será la función callback
*/
function unCallback(parametro) {
    console.log("Mi nombre es", parametro);
};

function main(cb) {
};
main(unCallback);
/*
- Dentro de esta función main, declará una constante con tu nombre, también invocá a 
la función callback (que es el parámetro recibido cb) y pasale como parámetro 
esta constante
*/
function unCallback(parametro) {
    console.log("Mi nombre es", parametro);
};

function main(cb) {
    const nombre = "Micaela";

    // La función unCallback recibiendo un nombre como parámetro 
    cb(nombre);
};
// La funcion main recibiendo a la función unCallback como parámetro
main(unCallback);



// -------    DESAFÍO PARA LA SECCIÓN -UNA FUNCIÓN DENTRO DE UN OBJETO-    ------- //

/*
- Declará un objeto con 4 propiedades, de las cuales 1 tiene que ser una función que
represente una compra
*/
var celular = {
    marca: "Motorola",
    version: "Edge 30 ultra",
    precio: 180000,
    compra: function () { },
};
/*
- Dentro de la propiedad que es una función, declará una constante que notifique que el
objeto fue agregado al carrito, luego devolvela usando return
*/
var celular = {
    marca: "Motorola",
    version: "Edge 30 ultra",
    precio: 180000,
    compra: function () {
        const agregado = "El objeto se ha agregado al carrito"
        return agregado
    },
};
/*
Usá la función de console.log() para mostrar el objeto completo
*/
console.log(celular);
/*
Usa la función de console.log() para mostrar las diferentes propiedades del objeto 
por separado
*/
console.log(celular.marca);
console.log(celular.version);
console.log(celular.precio);

// El objeto invoca a la propiedad que es una función, por lo que se tienen que agregar
// los paréntesis representativos
console.log(celular.compra());

