//trayendo el codigo del anterior archivo
console.log("codigo de archivo 03-while.js:") 
let i = 0;
while (i < 10) {
    console.log(i);
    i++; //Para ver loop infinito comentar esta linea
}
//para hacer que esto sea infinto basta con comentar la linea de codigo i++;
//Se puede ver que el buscador queda cargando y en la consola los numeros van aumentando rapidamente, si intentamos parar la carga de la pagina
//Es que los loops infinitos se apoderan del cliente que quiera cargar esa porcion de codigo, para detenerlo se cierra la pestana 
//o la aplicacion en si deja de funcionar