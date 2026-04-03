//comenzamos con variables normales 
let nombre = "hola mundo"; //si se imprime en consola esto, nos va a mostrar Hola mundo

//Pero se puden cambiar los valores asociados a las variables asi:
nombre = "Chanchito feliz"; //ahora cuando imprima esto saldra chanchito feliz

//esto ocurre porque todas las variables que se declaran con "let" pueden cambiar de valor en el futuro
console.log(nombre);

//si es que nosotros usamos "const"
const nombreConst = "Ivan";

//si intentamos reasignar el valor
nombreConst = "Jesus"; //esto nos arrojara un error en consola

console.log(nombreConst) //no llegara aqui por el error 

// queda a nuestro criterio usar los dos cuando se deba.
