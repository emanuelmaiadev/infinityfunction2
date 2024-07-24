document.addEventListener('DOMContentLoaded', () => {
    const calcularGorjetaButton = document.getElementById('calcularGorjeta');
    const valorContaInput = document.getElementById('valorConta');
    const percentualGorjetaInput = document.getElementById('percentualGorjeta');
    const resultadoP = document.getElementById('resultado');

    const calcularGorjeta = (valorConta, percentualGorjeta, callback) => {
        const gorjeta = valorConta * (percentualGorjeta / 100);
        callback(gorjeta);
    };

    const exibirResultado = (gorjeta) => {
        resultadoP.textContent = `Gorjeta: R$ ${gorjeta.toFixed(2)}`;
    };

    calcularGorjetaButton.addEventListener('click', () => {
        const valorConta = Number(valorContaInput.value);
        const percentualGorjeta = Number(percentualGorjetaInput.value);

        calcularGorjeta(valorConta, percentualGorjeta, exibirResultado);
    });
});
