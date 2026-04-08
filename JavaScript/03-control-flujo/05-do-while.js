//podemos observar las diferencias entre "while" y "do while" asi:

let i = 2; //variable auxiliar

console.log("Esta version es con 'while':");
while (i < 2) {
    if (i % 2 === 0) {
        console.log("numero: ", i);
    }
    i++;
}

//volvemos a asignar el mismo valor a la variable auxiliar
i = 2;

console.log("\nEsta version es con 'do while");
do {
    if (i % 2 === 0) {
        console.log("numero: ", i)
    }
    i++;
} while (i < 2);

//La version "do while" se ejecuto una vez a pesar de no cumplir con la conducion
//Esto es porque se ejecuta al menos una vez y despues evalua la condicion, y si se hubiera cumplido ahi repetia