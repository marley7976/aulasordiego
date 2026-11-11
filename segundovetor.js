const prompt = require("prompt-sync")();

function inverterParaSegundoVetor() {
    const vetorA = [];
    for (let i = 0; i < 10; i++) {
        vetorA.push(parseInt(prompt(`Elemento [${i}]: `), 10));
    }

    const vetorB = [...vetorA].reverse();

    console.log("Vetor Original (A):", vetorA);
    console.log("Vetor Invertido (B):", vetorB);
}

inverterParaSegundoVetor();
