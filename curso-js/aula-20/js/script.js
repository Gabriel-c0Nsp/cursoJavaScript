function meuEscopo () {
    const form = document.getElementById("form");

//    form.onsubmit = function (evento) {
//        evento.preventDefault();
//        alert(1);
//        console.log("foi enviado.");
//    };

function recebeEventoForm (evento) {
}

form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();