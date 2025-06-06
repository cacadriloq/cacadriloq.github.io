// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('local-pizza1') || "No seleccionada";
const pizza2 = localStorage.getItem('local-pizza2') || "No seleccionada";
const pizza3 = localStorage.getItem('local-pizza3') || "No seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('local-refresco') === "true" ? "$30" : "No seleccionado";
const papas = localStorage.getItem('local-papas') === "true" ? "$45" : "No seleccionado";
const postre = localStorage.getItem('local-postre') === "true" ? "$55" : "No seleccionado";
const ensalada = localStorage.getItem('local-ensalada') === "true" ? "$35" : "No seleccionado";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('local-metodoPago') || "No especificado";

// Recuperar el total desde localStorage
const total = localStorage.getItem('local-total') || "0";

// Mostrar las pizzas en el HTML
document.getElementById('local-pizza1').textContent = pizza1;
document.getElementById('local-pizza2').textContent = pizza2;
document.getElementById('local-pizza3').textContent = pizza3;

// Mostrar los complementos en el HTML
document.getElementById('local-refresco').textContent = refresco;
document.getElementById('local-papas').textContent = papas;
document.getElementById('local-postre').textContent = postre;
document.getElementById('local-ensalada').textContent = ensalada;

// Mostrar el método de pago en el HTML
document.getElementById('local-metodoPago').textContent = metodoPago;

// Mostrar el total en el HTML
document.getElementById('local-total').textContent = total;