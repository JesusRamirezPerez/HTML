import '../css/componentes.css'
// import webpackimg from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {
  console.log('creando etiqueta h1'); 

  const h1 = document.createElement('h1');
  h1.innerText = `Hola ${nombre} !!!!`;

  document.body.append(h1);

  // Insertar imagen 
  // console.log(webpackimg); 
  // const img = document.createElement('img');
  // img.src = webpackimg;
  // document.body.append(img);

}