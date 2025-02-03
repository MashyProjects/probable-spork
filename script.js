function comprarProducto(nombreProducto) {
    // Guardar el nombre del producto en localStorage para usarlo en la página de compra
    localStorage.setItem('productoSeleccionado', nombreProducto);
    // Redirigir a la página de compra
    window.location.href = 'compra.html';
}

function confirmarCompra() {
    const producto = localStorage.getItem('productoSeleccionado');
    alert(`Has comprado el ${producto}. ¡Gracias por tu compra!`);
    // Aquí podrías añadir lógica adicional, como enviar los datos a un servidor
}

function volverInicio() {
    window.location.href = 'index.html';
}

// Mostrar el nombre del producto en la página de compra
window.onload = function() {
    if (window.location.pathname.includes('compra.html')) {
        const producto = localStorage.getItem('productoSeleccionado');
        document.getElementById('nombreProducto').textContent = producto;
    }
};