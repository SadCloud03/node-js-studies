let cualEsMayor = (a, b) => {
    //lo primero que se me ocurre es
    if (a > b) {
        console.log("el mayor es:", a);
    } else if (b > a) {
        console.log("el mayor es:", b);
    } else {
        console.log("ambos numeros son de igual valor");
    }
}

//tambien se puede usar el operador ternario 
let cualEsMayorter = (a, b) => {
    return(a > b) ? a : b;
}

//que quilombo me ahorro con el ternario

console.log(cualEsMayor(10, 20));
console.log(cualEsMayorter(10, 20));