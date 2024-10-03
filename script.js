document.addEventListener("DOMContentLoaded", () => {
    const jugadores = [
        "ALFREDO ZUÑIGA",
        "CARLOS ZUÑIGA",
        "EMILIO ZUÑIGA",
        "CESAR ZUÑIGA"
    ];
    
    const jugadoresList = document.getElementById("jugadores-list");

    jugadores.forEach(jugador => {
        const li = document.createElement("li");
        li.textContent = jugador;
        jugadoresList.appendChild(li);
    });

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Gracias por tu mensaje, te contactaremos pronto.");
    });
});
