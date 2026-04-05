// Este es un ejemplo de operador logico bitwise:
console.log("Este es console.log(1 | 3);")
console.log(1 | 3); // esta va a tomar la secuencia de bits que forma el 1 y el tres y crea un numero poniendo 1 en los lugares donde hayan ceros 
// asi como 1 -> 00000001 y 3 -> 00000011, esta operacion bitwise arrojara solo -> 000000011 porque no hay espacios que rellenar con 1 creando un byte
// esto me va a devolver un 3

//ahora con 1 y 4
console.log("Este es console.log(1 | 4);")
console.log(1 | 4); //Este en cambio al tener 1 -> 00000001 y 4 -> 00000100, la operacion arrojara -> 00000101, porque se relleno los lugares sin 1
// esto me devuelve un 5

//ahora por ejemplo con los resultados de las dos operaciones
console.log("Este es console.log(3 | 5);")
console.log(3 | 5); //Como tuvimos los resultados -> 00000011 y 00000101, esto dara como resultado 00000111 -> que es 7
//esto devuelve 7


//trabajando con & es como trabajar con un "and" literalmente, pero tiene sus cosas
console.log("Este es console.log(1 & 3);")
console.log(1 & 3) // "&" lo que busca es formar un byte con los 1 compartidos entre los bytes
// esto devuelve 00000001 -> 1

//Por ejemplo con 7 y 3 tenemos que ellos comparten 00000011, entonces devolve -> 3
console.log("Este es console.log(7 & 3);")
console.log(7 & 3);
//esto da como resultado -> 3;

//que pasa si?
console.log("Estas son mis pruebas;")
console.log(0o1 | 0o11); //Despues veo 
console.log(3 | 9);