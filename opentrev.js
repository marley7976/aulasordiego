const prompt = require("prompt-sync")();

function operarVetores() {
    const tamanho = 20;
    const v1 = [];
    const v2 = [];

    console.log("--- Preenchendo Vetor 1 ---");
    for (let i = 0; i < tamanho; i++) v1.push(parseInt(prompt(`V1[${i}]: `), 10));

    console.log("--- Preenchendo Vetor 2 ---");
    for (let i = 0; i < tamanho; i++) v2.push(parseInt(prompt(`V2[${i}]: `), 10));

    const vDiferenca = v1.map((num, i) => num - v2[i]);
    const vSoma = v1.map((num, i) => num + v2[i]);
    const vMultiplicacao = v1.map((num, i) => num * v2[i]);

    console.log("Diferença:", vDiferenca);
    console.log("Soma:", vSoma);
    console.log("Multiplicação:", vMultiplicacao);
}

operarVetores();
