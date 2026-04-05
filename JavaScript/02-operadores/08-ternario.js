//pensando en que el operador ternario es asi

//expresion ? 'si es true' : 'si es false'

//supongamos que queremos verficiar y asignar acceso a alquien dependiendo de su edad
let edad = 16;

let acceso = edad > 17 ? 'puede entrar' : 'no puede entrar';

//como no esta evaluando en true la expresion, entonces devuelve "no puede entrar";
console.log(acceso)

//Pero si por el contrario cumple 
edad = 23;
acceso = edad > 17 ? 'puede entrar' : 'no puede entrar';
console.log(acceso); // Entonces si se le asigna el "puede entrar"

//mis pruebas
function asignarAcceso(edad) {
    if (edad > 17) {
        return true
    } else {
        return false
    }
}

//tambien recibe funciones como expresion y tambien recive otras cosas a demas de string para asignar segun caso
let respuestaAcceso = asignarAcceso(23) ? {
    acceso : "premium",
    nombre : "ivan",
} : {
    acceso : "denegado",
    nombre : "anonimo",
}
console.log(respuestaAcceso);