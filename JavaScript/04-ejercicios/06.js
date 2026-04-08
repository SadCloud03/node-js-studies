//Crear un algoritmo que devuelva la cantidad de numeros positivos del array 

let array = [2, 5, 7, 15, -5, -100, 55];


let cantidadNumerosPostivos = (arr) => {
    let positivos = 0;
    for (let numero of arr) {
        positivos = numero > 0 ? positivos+1 : positivos;
    }
    return positivos;
}

console.log("cantidad de numeros positivos:", cantidadNumerosPostivos(array));