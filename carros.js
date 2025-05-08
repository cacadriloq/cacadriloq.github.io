const autos = [
    { id: 1, nombre: "Toyota Corolla", marca: "Toyota", precio: 20000, motor: "1.8L", potencia: "140 HP", año: 2023 },
    { id: 2, nombre: "Honda Civic", marca: "Honda", precio: 22000, motor: "2.0L", potencia: "158 HP", año: 2022 },
    { id: 3, nombre: "Ford Mustang", marca: "Ford", precio: 35000, motor: "5.0L V8", potencia: "450 HP", año: 2021 },
    { id: 4, nombre: "Toyota Supra", marca: "Toyota", precio: 40000, motor: "3.0L Turbo", potencia: "382 HP", año: 2022 },
    { id: 5, nombre: "Honda Accord", marca: "Honda", precio: 25000, motor: "1.5L Turbo", potencia: "192 HP", año: 2023 },
    { id: 6, nombre: "Ford Explorer", marca: "Ford", precio: 33000, motor: "3.0L V6", potencia: "365 HP", año: 2024 }
];

const productosContainer = document.getElementById("productos");
const carritoBtn = document.getElementById("verCarrito");
const carrito = document.getElementById("carrito");
const listaCarrito = document.getElementById("listaCarrito");
const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
const buscarInput = document.getElementById("buscar");

let carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarAutos(filtro = "") {
    productosContainer.innerHTML = "";
    const autosFiltrados = filtro 
        ? autos.filter(auto => auto.nombre.toLowerCase().includes(filtro.toLowerCase()) || auto.marca.toLowerCase().includes(filtro.toLowerCase()))
        : autos;
    
    autosFiltrados.forEach(auto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<h3>${auto.nombre} (${auto.marca})</h3>
                        <p>Precio: $${auto.precio}</p>
                        <p>Motor: ${auto.motor}</p>
                        <p>Potencia: ${auto.potencia}</p>
                        <p>Año: ${auto.año}</p>
                        <button class="boton" onclick="agregarAlCarrito(${auto.id})">Agregar</button>`;
        productosContainer.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const auto = autos.find(a => a.id === id);
    carritoCompras.push(auto);
    actualizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    carritoCompras.forEach(auto => {
        let li = document.createElement("li");
        li.textContent = `${auto.nombre} - $${auto.precio}`;
        listaCarrito.appendChild(li);
    });
}

carritoBtn.addEventListener("click", () => {
    carrito.classList.toggle("oculto");
});

cerrarCarritoBtn.addEventListener("click", () => {
    carrito.classList.add("oculto");
});

buscarInput.addEventListener("input", (e) => {
    mostrarAutos(e.target.value);
});

mostrarAutos();
actualizarCarrito();
