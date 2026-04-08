/* 
Crear algoritmo que devuelva el numero menor y mayor de un array
*/

let array = [2, 5, 7, 15, -5, -100, 55];

let encontrarMayor = (array) => {

    let mayor = array[0];
    let menor = array[0]; //esto es para asegurar que el numero menor y mayor sean justos del array

    // for (let element of array) {
    //     if (element > mayor) {
    //         mayor = element;
    //     } else if (element < menor) {
    //         menor = element;
    //     } else {
    //         continue;
    //     }
    // }

    //tambien puedo hacer con el ternario
    for (let numero of array) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    console.log("mayor:", mayor, "\nmenor:", menor);
}

encontrarMayor(array);