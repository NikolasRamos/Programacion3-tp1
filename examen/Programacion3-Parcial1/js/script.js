const btnModo = document.querySelector("#nav-button");

btnModo.addEventListener("click", () => {
    // Alterna entre modos
    document.body.classList.toggle("dark-mode");

    // Guarda la preferencia en el navegador
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
    }
    else{
        localStorage.setItem("tema", "claro");
    }
});

// Coloca la preferencia al recargar la pagina
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
}