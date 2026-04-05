//primero supongamos que tenemos una variable 
let a = 5;
// y quremeos sumarle 5 a esto, podemos hacerlo asi
let b = a + 5; // y asi tenemos el valor de 10 

//Esto se puede hacer de manera mas corta asi:
a = a + 5; // asi el valor de a pasa a ser el valor de a + 5 -> 10 

//Pero con los operadores de asignacion puede ser incluso mas facil:
//Adicion
a += 5; //En este caso le sumamos 5 con el operador de asignacion 
console.log(a, 'suma 5 con "+="');

//Pero con este operador nos sirve todos los operadores que hay aritmeticamente tambien. Asi:
//Sustraccion:
a -= 5;
console.log(a, 'resta 5 con "-="');
//Multiplicacion:
a *= 5;
console.log(a, "multiplica por 5 con '*='");
//divicion:
a /= 5;
console.log(a, 'divide por 5 con "/="');
//Modulo:
a %= 5;
console.log(a, 'modulo divido por 5 con "%="');
//Potencia
a **= 5;
console.log(a, 'potencia elevada a 5 con "**="');

