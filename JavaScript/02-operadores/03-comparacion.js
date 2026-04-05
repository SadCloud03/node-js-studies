//primero creamos una variable 
let a = 10;
console.log('El valor de "a" es:', a);

//ahora preguntemos si "a" es mayor a 5:
//console.log(a > 5);

//Con este ejemplo de operador de comparacion ">" podemos ver que cada vez que utilicemos 
//un operador de comparacion este nos devolvera un boolean

//Operadores Relacionales:
//mayor:
console.log(a > 10, 'comparar a > 10:');
//mayor o igual que:
console.log(a >= 10, 'comparar a >= 10');
//menor:
console.log(a < 10, 'comparar a < 10');
//menor o igual que:
console.log(a <= 10, 'comparar a <= 10');


//Operadores de Igualdad:
//exactamente igual 
console.log(a == 10, 'comparar a == 10');
//no es exactamente igual a:
console.log(a != 10, 'comparar a != 10');

//pero que pasa si hago esto:
console.log(a == "10", 'comparar a == "10"') //-> true
//Esto sucede porque "== y !=" solamente pregunta si los valores son iguales, 
//no si los tipos de datos son iguales...

//Para verificar tambien el tipo de dato y no solo el valor
//exactamente igual en valor y tipo:
console.log(a === "10", 'comparar a === "10"');
//No es exactamente igual en valor y tipo:
console.log(a !== "10", 'comparar a !== "10"');