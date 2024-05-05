let nome = document.getElementById("nome");
let email = document.getElementById("email");
let assunto = document.getElementById("assunto");
let mensagem = document.getElementById("mensagem");
let button = document.getElementById("submit-button");

function checkFields(event) {
    if (nome.value.trim() !== "" &&
        email.value.trim() !== "" &&
        assunto.value.trim() !== "" &&
        mensagem.value.trim() !== "") {
        button.disabled = false
    }else {
        button.disabled = true
    }
}

nome.addEventListener("input", checkFields);

email.addEventListener("input", checkFields);

assunto.addEventListener("input", checkFields);

mensagem.addEventListener("input", checkFields);

document.getElementById("formulario").addEventListener("submit", function(event) {
    validateForm(event);
});

function validateForm(event) {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length == 0 || nome.length > 50) {
        document.getElementById("nome-error").innerText = "Nome inválido";
        event.preventDefault();
    } else {
        document.getElementById("nome-error").innerText = "";
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) || email.length == 0) {
        document.getElementById("email-error").innerText = "E-mail inválido";
        event.preventDefault();
    } else {
        document.getElementById("email-error").innerText = "";
    }

    if (assunto.length == 0 || assunto.length > 50) {
        document.getElementById("assunto-error").innerText = "Assunto inválido";
        event.preventDefault();
    } else {
        document.getElementById("assunto-error").innerText = "";
    }

    if (mensagem.length == 0 || mensagem.length > 300) {
        document.getElementById("mensagem-error").innerText = "Mensagem inválida";
        event.preventDefault();
    } else {
        document.getElementById("mensagem-error").innerText = "";
    }
}   
