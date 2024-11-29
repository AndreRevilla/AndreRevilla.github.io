// Muestra un mensaje en la consola al cargar la página
console.log("Bienvenido a mi página web");

// Función para mostrar una alerta al hacer clic en el botón
function showAlert() {
    alert("Gracias por tu visita");
}

// Variable para rastrear el estado actual del color de fondo
let isOriginalColor = true;

// Función para alternar el color de fondo
function toggleBackgroundColor() {
    if (isOriginalColor) {
        document.body.style.backgroundColor = "#e0f7fa"; // Cambiar a azul claro
    } else {
        document.body.style.backgroundColor = "#ffffff"; // Volver al blanco
    }
    isOriginalColor = !isOriginalColor; // Cambiar el estado
}