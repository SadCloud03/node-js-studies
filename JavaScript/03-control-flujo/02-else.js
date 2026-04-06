//utilizando el codigo de 01-if.js
//va a haber casos en los que, si no se cumple la condicion que imponemos con el "if", se ejecute otro bloque de codigo
//En esos casos se utiliza la instruccion "else" 
let edad = 19;

//primer caso
console.log("primer caso 'else':");
if (edad >= 18) {
    console.log("usuario mayor de edad");
} else {
    console.log("usuario menor de edad");
}

//pero hay otras veces en las que no tenemos solo dos casos, si no que mas, en ese caso se usa "else if"
//Entonces asi se va a poder usar otros casos que dependan de otras condiciones 
console.log("\nsegundo caso 'else if':");
if (edad >= 18) {
    console.log("usuario mayor de edad");
} else if (edad > 13) {
    console.log("usuario necesita estar con sus padres");
} else {
    console.log("usuario no puede ingresar");
}
//Aca hay un caso particular, edad es mayor a 18, pero tambien en mayor a 13, pero solo una de ellas se va a ejecutar
//Las instrucciones se ejecutan de arriba a abajo, y la primera condicion que se cumpla es la que se ejecuta
//El resto de las funciones solo son ignoradas