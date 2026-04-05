//Los operadores logicos que hay en JS son tres:
//AND, OR, NOT
//Estos evaluan valores boolean y devuelven otro boolean

// AND : && 
//evalua dos booleans a ambos lados del "&&", ambos tienen que ser true para que devuelva true
console.log("console.log(true && true);",true && true);
console.log("console.log(false && true);",false && true);
console.log("console.log(true && false);",true && false);
console.log("console.log(false && false);",false && false);

//Ejemplo de caso real (netflix)
//Podemos ser menor de edad, ser mayor de edad y estar suscrito. Dependiendo de eso se muetra el contenido:
let mayor = true;
let suscrito = false;

//Entonces se usan AND (&&):
console.log('operador and', mayor && suscrito);

// OR : ||
//evalua tambien dos booleans a ambos lados de "||", pero solo uno de ellos basta con que sea true para que devuelva true
console.log("console.log(true || true);",true || true);
console.log("console.log(false || true);",false || true);
console.log("console.log(true || false);",true || false);
console.log("console.log(false || false);",false || false);

// NOT : !(Boolean)
//Toma el valor de un boolean y lo combierte en su opuesto, osea si true -> false y si false -> true
console.log("mayor :", mayor);
console.log("console.log(!mayor)", !mayor);
console.log("suscrito :", suscrito);
console.log("console.log(!suscrito)", !suscrito);
//Entonces con esto es que negamos una variable
