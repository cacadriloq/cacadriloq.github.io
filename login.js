import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = { apiKey: "TU_API_KEY", authDomain: "TU_DOMINIO", projectId: "TU_PROYECTO" };
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const googleLoginBtn = document.getElementById("googleLogin");
const errorMessage = document.getElementById("error-message");

// **Registrar nuevo usuario y redirigir**
registerBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Cuenta creada exitosamente. Redirigiendo...");
        window.location.href = "carros.html";
    })
    .catch(error => {
        errorMessage.textContent = "Error al registrarse: " + error.message;
    });
});

// **Iniciar sesión con correo y contraseña y redirigir**
loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Sesión iniciada correctamente. Redirigiendo...");
        window.location.href = "carros.html";
    })
    .catch(error => {
        errorMessage.textContent = "Error al iniciar sesión: " + error.message;
    });
});

// **Iniciar sesión con Google y redirigir**
googleLoginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
    .then(() => {
        alert("Sesión iniciada con Google. Redirigiendo...");
        window.location.href = "carros.html";
    })
    .catch(error => {
        errorMessage.textContent = "Error de autenticación: " + error.message;
    });
});
