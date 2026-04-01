const express = require('express');
const app = express() //Instancial la app express para envolver Node.js 

const PORT = 8080; //puerto para conexion

app.get('/', (req, res) => {
    res.status(500).json({"message" : "error"})
}); //metodo base del buscador GET 

app.listen(PORT, () => {
    console.log(`Example app listening on port : ${PORT}`);
});
