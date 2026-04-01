const express = require('express');
const app = express(); //create an application

//ahora tenemos que hacer que escuche en algun puerto
const PORT = 8080;

//hacer un metodo GET, lo primero que recibe este metodo es el path, en este caso es "/" y lo segundo es una funcion
// la funcion recibe tres diferentes parametros (request, response, nextFunction) -> estandar es llamar a request = req y a response = res 
app.get("/", (req, res) => {
    //aqui se escribe como va a manejar el path metodo get
    console.log("here")
    // res.send("hola") 
    // con res lo que nosotros podemos hacer es enviar respuestas al cliente y en este caso con send()
    //.send() es la funcion mas normal que se usa para enviar informacion al cliente y este envia cualquier cosa que le pasamos, es muy generico

    //pero generalmente se tiene que ser mas especifico entonces no se termina usando .send()
    //res.sendStatus(500) 
    //Con esto por ejemplo podemos enviar los status_code de HTTP al cliente como respuesta
    //este por ejemplo hara que el cliente vea Server Internal Error, porque significa error del servidor
    
    //Pero para generalmente cuando se envia el status code se quiere enviar tambien un mensaje con el:
    //entonces lo que se puede hacer es esto:
    //res.status(500).send("el servidor no pudo responder a tiempo")
    //esto ahora envia el status, pero aparte le muestra al cliente el mensaje que se envio, pero no solo funciona con send, Se puede ir concatenando asi metodos para hacer lo que se quiere 

    //Este es otro ejemplo 
    res.status(500).json({"message" : "Server timeout"})
    //En este caso lo que envia en un json.. y este es API entonces puede devolver JSONs por ejemplo

    //en caso de no especificar el status() lo que pasa es que por default es status_code = 200 

    //otra cosa que se puede hacer es hacer que el usuario pueda descargar cosas por medio de los metodos
    //res.status(200).download("server.js");
    // Entonces si recargo esto en la pagina me sale un popout que me pregunta donde quiero guardar el archivo que especifico en download()
})

//hacer que escuche el servidor
app.listen(PORT, () => {
    console.log("hola mundo")
})

// esto ahora esta haciendo que escuche pero como no tiene ninguna ruta configurada para el metodo GET
// lo que va a hacer es mostrar el texto Cannot GET /  
