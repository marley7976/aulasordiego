function somarMatrizes(matA, matB) {
    if (matA.length !== matB.length || matA[0].length !== matB[0].length) {
        return "Erro: As matrizes precisam ter exatamente as mesmas dimensões.";
    }

    return matA.map((linha, i) => 
        linha.map((valor, j) => valor + matB[i][j])
    );
}

// Teste prático:
const m1 = [[10, 20], [30, 40]];
const m2 = [[1, 2], [3, 4]];
console.log("Soma:", somarMatrizes(m1, m2));
