// Tomando el codigo que ya habiamos hecho antes
let i = 2;
while(i < 2) {
    if (i % 2 === 0) {
        console.log("numero par: ", i);
    }
    i++;
}

//Voler a hacerlo pero con sintaxis de "for", es sencillo

for (let j = 2; j < 10; j++) {
    if (j % 2 === 0) {
        console.log("numero par:", j);
    }
}
//Con for, igual a C++, lo que hacemos es en la misma linea dentro del parentesis, declaramos la variable, 
//ponemos la condicion, y despues definimos que hacer con la variable terminada la iteracion

/*
declaramos : let j = 2
condicionamos : j < 10
cambiamos : j++
*/

