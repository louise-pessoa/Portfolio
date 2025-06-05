console.log("O portfólio está carregado!");

/* Exemplo: Scroll suave para as seções*/
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

alert("Bem vindo ao meu portifólio!");