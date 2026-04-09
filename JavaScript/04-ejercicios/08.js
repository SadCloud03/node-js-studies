/* 
crear un algoritmo que tome un array de objetos y devuelva un array de pares
*/

let objetos = [{
    id : 1,
    name : "Ivan",
}, {
    id : 2,
    name : "Felipe",
}, {
    id : 3,
    name : "Zara",
}];

//Ejemplo de par [[1, {id : 1, name : "Ivan"}]];

let obejtosApares = (array) => {

    let pares = [];

    for (indice in objetos) {
        let objeto = objetos[indice]
        pares[indice] = [objeto["id"], objeto];
    }

    return pares
}

console.log(obejtosApares(objetos));
//falle  con exito