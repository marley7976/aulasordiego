function diagonalPrincipal50() {
    const ordem = 50;
    const matriz = [];
    const diagonal = [];

    for (let i = 0; i < ordem; i++) {
        matriz[i] = [];
        for (let j = 0; j < ordem; j++) {
            // Gera número real aleatório com 1 casa decimal
            matriz[i][j] = Number((Math.random() * 100).toFixed(1));
            if (i === j) {
                diagonal.push(matriz[i][j]);
            }
        }
    }

    console.log("Vetor da Diagonal Principal (50 elementos):");
    console.log(diagonal);
}

diagonalPrincipal50();
