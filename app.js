document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm()
});

function validateForm() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let messagem = document.getElementById("mensagem").value.trim();

    if (nome.length == 0 || nome.length > 50) {
        document.getElementById("nome-error").innerText = "Nome inválido";
    } else {
        document.getElementById("nome-error").innerText = "";
    }

    if (assunto.length == 0 || assunto.length > 50) {
        document.getElementById("assunto-error").innerText = "Assunto inválido";
    } else {
        document.getElementById("assunto-error").innerText = "";
    }
}   