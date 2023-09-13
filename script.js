// Obtén el botón y el contenido
const modoBtn = document.getElementById('modo-btn');
const contenido = document.getElementById('contenido');

// Inicializa el modo actual (por defecto, el modo oscuro)
let modoActual = 'dark-mode';

// Función para cambiar el modo
function toggleModo() {
    if (modoActual === 'dark-mode') {
        modoActual = 'light-mode';
    } else {
        modoActual = 'dark-mode';
    }

    // Actualiza la clase del body
    document.body.className = modoActual;
}

// Agrega un evento clic al botón para cambiar el modo
modoBtn.addEventListener('click', toggleModo);