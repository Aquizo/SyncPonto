document.getElementById("btn-bater-ponto").addEventListener("click", () => {
    const agora = new Date();

    const dia = agora.getDate();
    const mes = agora.getMonth();
    const ano = agora.getFullYear();

    const confirmar = confirm(`Confirmar ponto em ${dia}/${mes+1}/${ano}?`);
    if (!confirmar) return;

    document.cookie = `pontoBatido=${dia}-${mes}-${ano}; path=/;`;

    alert("Ponto registrado! Abra o calendário para ver.");
});


document.addEventListener("DOMContentLoaded", () => {
    function mostrarDataHora() {
        const agora = new Date();
        const dia = String(agora.getDate()).padStart(2,"0");
        const mes = String(agora.getMonth()+1).padStart(2,"0");
        const ano = agora.getFullYear();
        const horas = String(agora.getHours()).padStart(2,"0");
        const minutos = String(agora.getMinutes()).padStart(2,"0");
        const dataHora = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
        document.getElementById("dataHora").textContent = dataHora;
    }
    mostrarDataHora();
    setInterval(mostrarDataHora, 1000);
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM carregado");
    const formulario = document.getElementById("form");
    if (!formulario) {
        console.error("Formulário não encontrado!");
        return;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulário enviado!");
    });
});
