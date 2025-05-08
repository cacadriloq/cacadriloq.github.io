import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = { apiKey: "TU_API_KEY", authDomain: "TU_DOMINIO", projectId: "TU_PROYECTO" };
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
    signInWithPopup(auth, provider)
    .then(result => alert(`Bienvenido ${result.user.displayName}!`))
    .catch(error => console.error("Error de autenticación", error));
});
