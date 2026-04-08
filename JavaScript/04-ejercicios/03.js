//construir una fucion que nos permita agarrar un elemento de un array 

let seleccionArreglo = (array, indice) => {
    
    //validar si es que el indice esta dentro del array:    
    if (indice < 0 || indice >= array.length) {
        return "indice invalido";
    }

    return array[indice];
}

let resultado = seleccionArreglo([1, 2], 2)

console.log(resultado);