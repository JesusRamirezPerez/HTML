// 
// Realizar peticiones HTTP a  un host
// Se realiza mediante la funcion fetch()  yaes una funcion nativa
// fetch() regresa una promesa que resuelve el response
// 

// Codigos de error en peticiones HTTP

const urlHost = 'https://api.chucknorris.io/jokes/random';

fetch( urlHost ).then( resp => {            // resp --> respuesta de nuestra peticion HTTP
  console.log(resp);
  resp.json().then(data => {                // Datos de nuestro responce 
    console.log(data);
  });
});