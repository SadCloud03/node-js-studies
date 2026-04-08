//el switch nos ayuda mucho a decirle explicitamente al codigo que hacer en caso de que
//una variable que decidamos tenga x valor 

//Esta es la variable que vamos a evaluar
let accion = 'evaluar';

//Con switch vamos a definir que hacer si "accion" tiene "x" variable
switch (accion) {
    // si accion = "evaluar" entonces...
    case 'evaluar':
        console.log("Accion de evaluar");
        break; // si no ponemos break, va a proceder a ejecutar los otros cases hasta encontrar un break o que no haya mas cases
        // si accion = "guardar" entonces...
    case 'guardar':
        console.log("Accion de guardar");
        break;
        // si accion no es ningun case, entonces...
    default:
        console.log("Accion no reconocida")
}

//Entre switch e if-else, usar uno u otro depende de los casos y tambien en mayor medida a nuestro criterio
//ambos se pueden usar, pero ambos estan adaptados mejor para ciertas situaciones
