const prompt = require("prompt-sync")();

function organizarParesEImpares() {
    const qtd = parseInt(prompt("Quantos números deseja digitar? "), 10);
    const numeros = [];

    for (let i = 0; i < qtd; i++) {
        numeros.push(parseInt(prompt(`Número ${i + 1}: `), 10));
    }

    const pares = numeros.filter(n => n % 2 === 0).sort((a, b) => a - b);
    const impares = numeros.filter(n => n % 2 !== 0).sort((a, b) => b - a);

    const resultado = [...pares, ...impares];
    console.log("Resultado organizado:", resultado);
}

organizarParesEImpares();
