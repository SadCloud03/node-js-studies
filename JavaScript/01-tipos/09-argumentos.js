//Comenzando devuelta con la funcion del archivo anterior
function sumar() {
    return 2 + 2;
}

//para poder hacer que la funcion sea mas flexible lo que podemos hacer es hacer uso de las funcionalidades
// argumentos y parametros

//entonces esto es una funcion con un parametro:
function suma(a) {
    return a + 2;
}
//"a" ahora mismo esta representando un valor futuro dentro de la funcion

//para usar esta funcionalidad le pasamos el valor futuro como argumento
let resultado = suma(5);

//la mostramos para ver que devuelve
console.log(resultado); // -> devuelve 7 -> que es a + 2, donde a = 5;

//esto permite reutilizar logica de codigo en otros lugares 

//las funciones reciben varios parametros y argumentos, como por ejemplo asi:
// funcion que recibe dos parametros, a y b:
function sumaDosParametros(a, b) {
    return a + b;
}
// asignamos el valor resultado de la funcion con argumentos a = 5 y b = 6:
let segundoResultado = sumaDosParametros(5, 6);

//imprimimos a ver que sale:
console.log(segundoResultado);

//cuando se revisa el tipo de dato que es una funcion con "typeof" devuelve function 
console.log(typeof sumaDosParametros); //Sin abre y cierra parentesis, si no devuelve el tipo de valor que devuelve la funcion

//se puede revisar cuales son los argumentos que estan reciviendo las funciones con la palabra reservada "arguments":
//creamos una funcion que reciba n parametros:
function funcionExtra(a) {
    console.log(arguments); // asi se usa la palabra reservada "arguments"
    return a + 2;
}

//le pasamos argumentos de mas:
let resultadoExtra = funcionExtra(1, 2, 4, 5); //interesante que no se rompa pero solo use un argumento que le pase 

//imprimimos a ver que pasa
console.log(resultadoExtra);
