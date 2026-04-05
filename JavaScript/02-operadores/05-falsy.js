//Con los operadores logicos podemos hacer operaciones short-circuit

//los valores que evaluan en Falso primeramente son:
/*
boolean : false
numeric : 0
string : ''
null : null
undefined : undefined
NaN : NaN
*/

//Usando el operador de OR:
//supongamos que entramos a una pagina y no definimos nuestro nombre:
let nombre = '';
//Y en la pagina se usa el nombre de usuario el cual necesita si o si un dato:
let username = nombre || 'Anonimo'; //Como '' evalua en falso, y || devuelve el primero que de verdadero, 
//entonces se asignara a la variable 'anonimo'
console.log(username);

//pero una vez le asignemos el nombre:
nombre = "ivan";
username = nombre || 'Anonimo';
//Devolvera el primero que de verdadero, que es el nombre que ya asignamos
console.log(username);

//Usando el operador AND:
//Este operador vamos a usar cuando querramos ejecutar una funcion siempre y cuando la primera haya evaluado en true
//hacemos algunas funciones
function funcion1() {
    console.log("esta es la funcion 1");
    return false;
}

function funcion2() {
    console.log("Esta es la funcion 2");
    return true;
}

function funcion3() {
    console.log("esta es la funcion 3");
    return false
}
//siempre y cuando la primera funcion retorne true, la segunda se ejecutara
let resultado = funcion1() && funcion2();
//No importa incluso si la segunda funcion retornara falso
let resultado2 = funcion2() && funcion3();