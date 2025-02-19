// Función para alternar la visibilidad de la sección de contacto
function toggleContactInfo() {
    let contactSection = document.getElementById('contact-info');

    // Alternar la visibilidad de la sección de contacto
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
}
