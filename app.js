// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista esta vacia. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}
