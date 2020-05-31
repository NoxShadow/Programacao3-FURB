function calcular() {
    let total = 0;

    total += getValorNumericoCampo('numero1Input');
    total += getValorNumericoCampo('numero2Input');
    total += getValorNumericoCampo('numero3Input');

    alert(total);
}

function getValorNumericoCampo(campoId) {
    const valorCampo = Number(document.getElementById(campoId).value);

    if (valorCampo.toString() === 'NaN') {
        return 0;
    }

    return + valorCampo;
}