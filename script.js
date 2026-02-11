document.addEventListener('DOMContentLoaded', () => {

    // --- Configuración ---
    const mapsShareUrl = "https://maps.app.goo.gl/jPLNB2bfeGqqLbyz7";
    
    const btnConfirm = document.getElementById('btnConfirm');
    const btnLocation = document.getElementById('btnLocation');

    // --- Funcionalidad del Botón Ubicación ---
    btnLocation?.addEventListener('click', () => {
        // Abrimos Google Maps en una nueva pestaña
        window.open(mapsShareUrl, '_blank');
    });

    // --- Funcionalidad del Botón Confirmación (WhatsApp) ---
    btnConfirm?.addEventListener('click', () => {
        const phone = "5493884602354";
        const message = "Hola! Quiero confirmar mi asistencia para el cumple de Delfi.";
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

});