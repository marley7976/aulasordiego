function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    console.log(`IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`);
}

// Exemplo de uso:
calcularIMC(75, 1.75);
