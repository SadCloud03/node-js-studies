//Para definir un array lo que se hace es esto
let animales = ["chanchito","caballo"];
// [] es lo que se llama un array literal, y este puede ser declarado vacio, como tambien se puede declar con valores dentro
// a la hora de su creacion, como lo hicimos aca

//al imprimir en consola lo que va a mostrar es el primero el numero de elementos del array y luego el contenido
console.log(animales);
//algo interesante es que el array muestra su contenido en el orden que yo agregue a la hora de su creacion, este respeta el orden que le pusimos

//los elementos de un array como en todos los lenguajes tienen un indice el cual comienza desde cero, entonces
//lo que se puede hacer es acceder a los elementos del array por su indice, asi:
console.log(animales[0]);
//como el indice corresponde al primer elemento "chanchito", va a mostrar en consola eso:
//Dentro del [] se pone el indice que corresponde al elemento al cual queremos acceder 

//Para agregar un nuevo elemento a un array se hace asi
animales[2] = "pez";
console.log(animales);
//dentro del [] se pone el indice que corresponde al elemento que queremos agregar

//Por eso debemos de tener cuidado, porque pedemos poner perfectamente un indice sin sentido 
animales[10] = "gato";

//y se crea el elemento con el indice 10, pero tambien para compezar por los indices que no se declararon se crean elementos 
//que son undefined, especificamente del 3 al 9, todos van a ser empty o mejor undefined
console.log(animales);
console.log(animales[5]);

//pero los array entonces siguen tambien el par llave-valor porque la llave seria su indice y su valor el contenido,
//entonces por eso podemos acceder a su contenido con [] y cuando se hace typeof sale como object

//Tambien podemos ver la cantidad de elementos de un array con la palabra reservada "length", asi
console.log(animales.length); // -> y esto nos arrojara 11, que es la cantidad de elementos del array