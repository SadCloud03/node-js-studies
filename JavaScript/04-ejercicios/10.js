/* 
crear array de longitud N, y que sus elementos sean numeros de 1 hasta N
*/

// let longitud = 7;
// let array = []

// for (let i = 0; i < longitud; i++) {
//     array[i] = (i + 1);
// }

let crearArray = (longitud) => {

    if (longitud <= 0) {
        return []
    }

    let array = []

    for (let i = 0; i < longitud; i++) {
        array[i] = i + 1;
    }

    return array;
}
console.log(crearArray(7));