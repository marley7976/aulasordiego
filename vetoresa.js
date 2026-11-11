const prompt = require("prompt-sync")();

function lerNosDoisSentidos() {
    const vetor = [];

    for (let i = 0; i < 10; i++) {
        vetor.push(parseInt(prompt(`Digite o ${i + 1}º número: `), 10));
    }

    console.log("Ordem original:", vetor);
    console.log("Ordem inversa:", [...vetor].reverse());
}

lerNosDoisSentidos();
