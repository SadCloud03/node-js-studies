//Los objetos son datos que tienen sentido tenerlos juntos, por ejemplo:

//personaje de TV:
let nombre = "tanjiro";
let anime = "Demon Slayer";
let edad = 16;

//Esta sintaxis es la creacion de objetos, este {} es un objeto literal, y cuando no tiene nada esta vacio.
let personaje = {
    nombre : "tanjiro",
    anime : "Demon Slayer",
    edad : 16, //conviene dejar la coma tambien aqui, porque cuando se trabaja 
    //con sistemas de control de version si no le agregamos esta coma y ampliamos el objeto indica que se modificaron dos lineas
};

//lo que esta dentro del objeto como "nombre : "tanjiro"" es conocido como par llave-valor, "nombre" es llave y "tanjiro" es valor
//otra forma de llamar a estos es por "propiedad"
console.log(personaje);

/* En consola del buscador no nos muestra en orden que creamos las cosas, esto es porque JS no asegura el orden de 
las cosas */ 

//Para ver solo una propiedad en particular se hace asi:
console.log(personaje.anime); //Esto es muy util por ejemplo cuando no se puede ver la definicion del objeto

//otra forma de acceder a los valores es con [] y se llama con el nombre de la llave en string
console.log(personaje["nombre"]);

//Para modificar propiedades se puede hacer asi:
personaje.edad = 13;
//pero tambien se puede hacer asi:
personaje["edad"] = 16;

/* 
Cual de las dos conviene usar:
Si se sabe el nombre de la variable a la cual queremos acceder la verdad que da lo mismo
Si no se sabe el nombre o se va a iterar todas las propiedades de un objeto es mejor usar [], porque:
*/
let llave = "edad";
personaje[llave] = 17;

//Para eliminar una propiedad de un objeto es:
delete personaje.anime;

console.log(personaje); //Ya no va a aparecer la propiedad anime