// Seleccionar el textarea
const textarea = document.querySelector('.CajaTextoEncriptar');

// Evento para convertir a minúsculas
textarea.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

// Función para encriptar el texto
function encriptarTexto(texto) {
    const encriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, match => encriptacion[match]);
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const desencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, match => desencriptacion[match]);
}

// Función para mostrar el mensaje (encriptado o desencriptado)
function mostrarMensaje(texto) {
    const areaMensaje = document.querySelector('.AreaMensaje');
    areaMensaje.innerHTML = '';  // Limpiar contenido previo

    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = texto;
    nuevoParrafo.classList.add('TextoEncriptado');
    nuevoParrafo.style.whiteSpace = 'pre-wrap';
    nuevoParrafo.style.textAlign = 'center';

    areaMensaje.appendChild(nuevoParrafo);

    const botonCopiar = document.createElement('button');
    botonCopiar.textContent = 'Copiar';
    botonCopiar.classList.add('boton-copiar');
    botonCopiar.addEventListener('click', copiarTexto);
    areaMensaje.appendChild(botonCopiar);
}

// Funciones para manejar el clic en los botones de encriptar y desencriptar
function manejarEncriptacion() {
    const textoIngresado = document.querySelector('.CajaTextoEncriptar').value;
    const textoEncriptado = encriptarTexto(textoIngresado);
    mostrarMensaje(textoEncriptado);
}

function manejarDesencriptacion() {
    const textoIngresado = document.querySelector('.CajaTextoEncriptar').value;
    const textoDesencriptado = desencriptarTexto(textoIngresado);
    mostrarMensaje(textoDesencriptado);
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    const textoEncriptado = document.querySelector('.TextoEncriptado');
    navigator.clipboard.writeText(textoEncriptado.textContent)
        .then(() => alert('Texto copiado al portapapeles!'))
        .catch(err => alert('Error al copiar el texto: ', err));
}

// Asignación de funciones a los botones
document.querySelector('.encriptar').addEventListener('click', manejarEncriptacion);
document.querySelector('.desencriptar').addEventListener('click', manejarDesencriptacion);
