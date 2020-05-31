function calcularFatorial() {

    const input = document.getElementById('inputNumero');

    const valor = fatorial(+ input.value);

    document.getElementById('resultado').innerText = valor;
}

function fatorial(num) {
    if (!Number.isInteger(num)) {
        return 'Erro, input inválido: Não é numero ou não é inteiro';
    }
    if (num < 0) {
        return 'Erro, input inválido: Menor que zero ';
    }
    if (num == 0) {
        return 1;
    }

    return num * fatorial(num - 1);
}