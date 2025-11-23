let mesAtual = new Date().getMonth();
let anoAtual = new Date().getFullYear();

function lerCookie(nome) {
    const partes = document.cookie.split("; ").find(row => row.trim().startsWith(nome + "="));
    return partes ? partes.split("=")[1] : null;
}

function getNomeMes(mes) {
    const meses = [
        'Janeiro','Fevereiro','Março','Abril',
        'Maio','Junho','Julho','Agosto',
        'Setembro','Outubro','Novembro','Dezembro'
    ];
    return meses[mes];
}

function renderCalendario() {
    const dataHoje = new Date();
    const diaAtual = dataHoje.getDate();

    const headerElement = document.getElementById('mes-ano');
    headerElement.textContent = `${getNomeMes(mesAtual)} ${anoAtual}`;

    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
    const ultimoDia = new Date(anoAtual, mesAtual + 1, 0).getDate();

    const tbody = document.getElementById('dias-calendario');
    tbody.innerHTML = '';

    let linha = document.createElement('tr');
    let diaContador = 1;

    for (let i = 0; i < primeiroDia; i++) {
        linha.appendChild(document.createElement('td'));
    }

    while (diaContador <= ultimoDia) {
        if (linha.children.length === 7) {
            tbody.appendChild(linha);
            linha = document.createElement('tr');
        }

        const coluna = document.createElement('td');
        coluna.textContent = diaContador;

        coluna.dataset.dia = diaContador;
        coluna.dataset.mes = mesAtual + 1; 
        coluna.dataset.ano = anoAtual;

        if (
            diaContador === diaAtual &&
            mesAtual === dataHoje.getMonth() &&
            anoAtual === dataHoje.getFullYear()
        ) {
            coluna.classList.add('dia-atual');
        }

        const diaSemana = new Date(anoAtual, mesAtual, diaContador).getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            coluna.classList.add('fim-de-semana');
        }

        linha.appendChild(coluna);
        diaContador++;
    }

    if (linha.children.length > 0) {
        tbody.appendChild(linha);
    }

    aplicarPontoSalvo();
}

function proximoMes() {
    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
    renderCalendario();
}

function mesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }
    renderCalendario();
}

function aplicarPontoSalvo() {
    const valor = lerCookie("pontoBatido");
    if (!valor) return;

    const [dia, mes, ano] = valor.split("-").map(Number);

    const celulas = document.querySelectorAll("#dias-calendario td");

    celulas.forEach(c => {
        if (
            Number(c.dataset.dia) === dia &&
            Number(c.dataset.mes) === mes + 1 &&
            Number(c.dataset.ano) === ano
        ) {
            c.classList.add("dia-ponto");
        }
    });
}

document.addEventListener('DOMContentLoaded', renderCalendario);
