//cuales son los numeros pares

//hacemos una variable
let i = 0;

console.log("detro del while", typeof(i < 10))
// este es el caso mas simple de while
while(i < 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++; //siempre recordar de alterar la variable condicion para que no se vuelva infinito 
}

//una vez salido del loop ejecuta codigo normalmente
console.log("fuera del while");