function mostrarDataHora() {
    const agora = new Date();

    const dia = agora.getDate().toString().padStart(2, "0");
    const mes = (agora.getMonth() + 1).toString().padStart(2, "0");
    const ano = agora.getFullYear();

    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");

    const dataHora = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

    document.getElementById("dataHora").innerText = dataHora;
}

setInterval(mostrarDataHora, 1000);

mostrarDataHora();

//Formulário Corrigir Ponto
document.getElementById("formCorrigir").addEventListener("submit", function(event) {
    event.preventDefault()

    const opcao = document.querySelector('input[name="opcao"]:checked')
    const opcaoSelecionada = opcao ? opcao.value : "Nenhuma opção selecionada"
    if(){

    }
    const justificativa = document.getElementById("justificativa").value.trim() ||

});

//Formulário Abonar Falta
