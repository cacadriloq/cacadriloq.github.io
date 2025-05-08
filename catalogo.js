const autos = [
    { id: 1, nombre: "Toyota Corolla", marca: "Toyota", precio: 20000, img: "toyota-corolla.jpg", motor: "1.8L", potencia: "140 HP", año: 2023 },
    { id: 2, nombre: "Toyota Supra", marca: "Toyota", precio: 40000, img: "toyota-supra.jpg", motor: "3.0L Turbo", potencia: "382 HP", año: 2022 },
    { id: 3, nombre: "Honda Civic", marca: "Honda", precio: 22000, img: "honda-civic.jpg", motor: "2.0L", potencia: "158 HP", año: 2022 },
    { id: 4, nombre: "Honda Accord", marca: "Honda", precio: 25000, img: "honda-accord.jpg", motor: "1.5L Turbo", potencia: "192 HP", año: 2023 },
    { id: 5, nombre: "Ford Mustang", marca: "Ford", precio: 35000, img: "ford-mustang.jpg", motor: "5.0L V8", potencia: "450 HP", año: 2021 },
    { id: 6, nombre: "Ford Explorer", marca: "Ford", precio: 33000, img: "ford-explorer.jpg", motor: "3.0L V6", potencia: "365 HP", año: 2024 },
    { id: 7, nombre: "Chevrolet Camaro", marca: "Chevrolet", precio: 38000, img: "chevrolet-camaro.jpg", motor: "6.2L V8", potencia: "455 HP", año: 2022 },
    { id: 8, nombre: "Tesla Model S", marca: "Tesla", precio: 80000, img: "tesla-model-s.jpg", motor: "Eléctrico", potencia: "670 HP", año: 2023 },
    { id: 9, nombre: "BMW M3", marca: "BMW", precio: 75000, img: "bmw-m3.jpg", motor: "3.0L Turbo", potencia: "473 HP", año: 2023 },
    { id: 10, nombre: "Mercedes-Benz C-Class", marca: "Mercedes-Benz", precio: 50000, img: "mercedes-c-class.jpg", motor: "2.0L Turbo", potencia: "255 HP", año: 2023 }
];

const autosContainer = document.getElementById("autos");
const buscarInput = document.getElementById("buscar");
const filtro = document.getElementById("filtro");

function mostrarAutos(filtroTexto = "", marca = "todos") {
    autosContainer.innerHTML = "";
    const autosFiltrados = autos.filter(auto => 
        (auto.nombre.toLowerCase().includes(filtroTexto.toLowerCase()) || auto.marca.toLowerCase().includes(filtroTexto.toLowerCase())) &&
        (marca === "todos" || auto.marca === marca)
    );
    
    autosFiltrados.forEach(auto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img src="${auto.img}" width="250">
                         <h3>${auto.nombre} (${auto.marca})</h3>
                         <p>Precio: $${auto.precio}</p>
                         <p>Motor: ${auto.motor}</p>
                         <p>Potencia: ${auto.potencia}</p>
                         <p>Año: ${auto.año}</p>
                         <button class="boton-agregar" onclick="agregarAlCarrito(${auto.id})">Agregar al carrito</button>`;
        autosContainer.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const auto = autos.find(a => a.id === id);

    // Evitar duplicados
    if (!carrito.some(item => item.id === id)) {
        carrito.push(auto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto agregado al carrito");
    } else {
        alert("Este producto ya está en el carrito.");
    }
}

// Eventos de búsqueda y filtro
buscarInput.addEventListener("input", (e) => {
    mostrarAutos(e.target.value, filtro.value);
});

filtro.addEventListener("change", (e) => {
    mostrarAutos(buscarInput.value, e.target.value);
});

// Inicializar catálogo
mostrarAutos();
