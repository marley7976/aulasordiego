const prompt = require("prompt-sync")();

function calcularIMCCompleto() {
    const peso = parseFloat(prompt("Digite seu peso (kg): "));
    const altura = parseFloat(prompt("Digite sua altura (m, ex: 1.75): "));

    const imc = peso / (altura * altura);
    let situacao = "";

    if (imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc < 25) {
        situacao = "Peso normal";
    } else if (imc < 30) {
        situacao = "Acima do peso";
    } else if (imc < 35) {
        situacao = "Obesidade grau 1";
    } else if (imc <= 40) {
        situacao = "Obesidade grau 2";
    } else {
        situacao = "Obesidade grau 3";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} -> Classificação: ${situacao}`);
}

calcularIMCCompleto();
