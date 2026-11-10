function rodarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function jogarDados() {
    const jogador1 = rodarDado();
    const jogador2 = rodarDado();

    console.log(`Jogador 1 tirou: ${jogador1}`);
    console.log(`Jogador 2 tirou: ${jogador2}`);

    if (jogador1 > jogador2) {
        console.log("Resultado: Jogador 1 VENCEU!");
    } else if (jogador2 > jogador1) {
        console.log("Resultado: Jogador 2 VENCEU!");
    } else {
        console.log("Resultado: EMPATE!");
    }
}

// Exemplo de uso:
jogarDados();
