//Esta instruccion nos sirve para que podamos iterar las propiedades dentro de un objeto
//Esto sirve mucho cuando las propiedades de un objeto se asignan en tiempo de ejecucion

let user = {
    id : 1,
    name : "Ivan",
    age : 23,
};

//prop recive el nombre de la llave del par llave-valor y para accedder al valor lo hacemos mediante []
for (let prop in user) {
    console.log(prop, user[prop])
}

//como las listas son tecnicamente objetos cuyos indices son las llaves, se puede tambien iterar asi 
let animales = ['Tiburon', 'Tigre', 'chancho', 'pollo'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}
//asi se iteraba antes a las listas, pero ahora es recomendable usar for-of