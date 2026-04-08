/*
crear algoritmo que devuelva el precio del producto mas impuesto
*/

let precioCompleto = (precio, impuesto) => {

    let precioMasImpuesto = precio + (precio * impuesto)

    return precioMasImpuesto;
}

console.log("el precio completo es:", precioCompleto(19.90, 0.15))