const prompt = require("prompt-sync")();

function transformarPorIndice() {
    const vetorOriginal = [];
    for (let i = 0; i < 10; i++) {
        vetorOriginal.push(parseInt(prompt(`Digite um inteiro positivo [${i}]: `), 10));
    }

    const vetorModificado = vetorOriginal.map((valor, indice) => {
        return indice % 2 === 0 ? valor / 2 : valor * 3;
    });

    console.log("Vetor Original:", vetorOriginal);
    console.log("Vetor Modificado:", vetorModificado);
}

transformarPorIndice();
