/* Función para el menú de navegación (Hamburguesa) */
function controlSemanas() {
    // Buscamos específicamente tu menú de arriba
    var x = document.getElementById("navSemanas");

    if (x.className === "topnav") {
        x.className += " responsive"; // Lo abre
    } else {
        x.className = "topnav"; // Lo cierra
    }
}

/* LA FUNCIÓN QUE LE EDITARON Y SE DAÑÓ: */
function funcionFormulario(elemento) {
    let color_bg = elemento.querySelector("input[type='text']").value;
    document.querySelector(".footer-card:nth-child(3)").style.background = color_bg;
}
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});
/* Función para el menú de navegación (Hamburguesa) del ejercicio práctico de la semana 7 */
                function activarEjercicio() {
                    // Buscamos el ID exacto que le pusiste al div: "ejercicioW3"
                    var x = document.getElementById("ejercicioW3");

                    // Si la clase es la normal, le añadimos " responsive" (con el espacio)
                    if (x.className === "topnav-ejercicio") {
                        x.className += " responsive";
                    } else {
                        // Si ya la tiene, se la quitamos para cerrar el menú
                        x.className = "topnav-ejercicio";
                    }
                }