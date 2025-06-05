console.log("O portfólio está carregado!");

window.onload = function() {
    const toastElement = document.getElementById("toast-bemvindo");

    toastElement.classList.add("show");
    setTimeout(function() {
        toastElement.classList.remove("show");
    }, 4000);
};