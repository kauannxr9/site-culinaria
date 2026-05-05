function curtir(comida) {
    alert(`Você curtiu: ${comida} ❤️`);
}

// Simulação de envio de formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});