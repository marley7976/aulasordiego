const prompt = require("prompt-sync")();

function buscarNome() {
    const vetorC = [];
    for (let i = 0; i < 10; i++) {
        vetorC.push(prompt(`Digite o ${i + 1}º nome: `).trim());
    }

    const busca = prompt("Digite um nome para buscar: ").trim();

    if (vetorC.includes(busca)) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }
}

buscarNome();
