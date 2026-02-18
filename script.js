document.addEventListener('DOMContentLoaded', () => {
    const mapsShareUrl = 'https://maps.app.goo.gl/jPLNB2bfeGqqLbyz7';
    const btnConfirm = document.getElementById('btnConfirm');
    const btnLocation = document.getElementById('btnLocation');

    btnLocation?.addEventListener('click', () => {
        window.open(mapsShareUrl, '_blank');
    });

    btnConfirm?.addEventListener('click', () => {
        const phone = '5493884602354';
        const message = 'Hola! Quiero confirmar mi asistencia para el cumple de Delfi.';
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});