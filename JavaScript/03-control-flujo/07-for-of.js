//Es una herramienta que nos ayuda a iterar elementos de un array mas facilmente

//tengamos una lista de animales 
let animales = ['Tiburon', 'Tigre', 'chancho', 'pollo'];

//Esta es la forma de iterar las cosas por loop for-of
for (let animal of animales) {
    console.log(animal);
}

//Pero esto mismo se puede hacer con los demas, 
//solo que imprimimos los elementos accediendo a ellos por su indice
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}
//y hara lo mismo, solo que mucho mas largo que la otra forma 