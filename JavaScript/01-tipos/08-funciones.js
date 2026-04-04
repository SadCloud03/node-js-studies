//tenemos un ejemplo de funcion:  
//podemos hacer una serie de pasos a llamar luego con saludar():
function saludar() {
    console.log("hola mundo");
}
console.log("Este es una funcion saludo()")
saludar()

//tambien podemos hacer que las funciones devuelvan cosas con "return"
function sumar() {
    return 2 + 2;
}

//se puede mostrar asi:
console.log("este es el resultado de sumar()");
let resultado = sumar();
console.log(resultado);

//Y tambien asi:
console.log("este es la segunda forma de presentar sumar()");
console.log(sumar());
//estas funciones son algo inutiles al no poderle pasar argumentos para que devuelvan resultados
