/*
crea un algoritmo que devuelva un array de objetos, en base a un array de pares 
*/

let pares = [
    [1, { name : "Ivan"}],
    [2, { name : "Felipe"}],
    [3, { name : "Zara"}]
]

let paresAobjetos = (array) => {
    let objetos = [];
    for (let indice in pares) {
        let par = pares[indice];
        objetos[indice] = par[1];
        objetos[indice]["id"] = par[0];
    }
    return objetos;
}

console.log(paresAobjetos(pares));