//como hay momentos en los que no queremos hacer una iteracion en particular en un loop
//o directamente queremos detener el loop existen estas dos instrucciones

//probemosla con while  
let i = 0;

while (i < 10) {
    i++;
    if (i === 2) {
        continue; //Nos saltamos la iteracion y no se imprime el 2
    } else if (i === 4) {
        break; //Salimos del loop y solo se imprime hasta 3
    }
    console.log(i);
}

//Esto funciona para 
/* 
- for
- for-in 
- for-of
- while
- do-while
*/