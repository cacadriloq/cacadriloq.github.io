document.getElementById('payButton').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'block';
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const paymentDetails = {
        cardNumber: document.getElementById('cardNumber').value,
        expiry: document.getElementById('expiry').value,
        cvv: document.getElementById('cvv').value,
        street: document.getElementById('street').value,
        colony: document.getElementById('colony').value,
        reference: document.getElementById('reference').value,
        domicile: document.getElementById('domicile').value,
        fraction: document.getElementById('fraction').value,
        postalCode: document.getElementById('postalCode').value,
        municipality: document.getElementById('municipality').value,
        phone: document.getElementById('phone').value
    };

    // Simulación de ticket de compra
    const ticketContent = `
        **Ticket de Compra**
        -----------------------------
        Número de tarjeta: **** **** **** ${paymentDetails.cardNumber.slice(-4)}
        Expiración: ${paymentDetails.expiry}
        CVV: ***
        Dirección de envío:
        ${paymentDetails.street}, ${paymentDetails.colony}, ${paymentDetails.municipality}, C.P. ${paymentDetails.postalCode}
        Teléfono: ${paymentDetails.phone}
        -----------------------------
        ¡Gracias por tu compra!
    `;

    // Crear archivo de texto para ticket
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ticket_compra.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Pedido realizado con éxito. Se ha generado tu ticket de compra.');
    document.getElementById('paymentModal').style.display = 'none';
});
