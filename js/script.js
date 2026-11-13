console.log("Script cargado correctamente, proceda");

const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

if (boton && mensaje) {
  boton.addEventListener('click', () => {
    mensaje.textContent = 'JavaScript funciona!';
    console.log("Botón clickeado");
  });
}

