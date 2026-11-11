function multiplicarMatrizes(matA, matB) {
    const linhasA = matA.length;
    const colunasA = matA[0].length;
    const linhasB = matB.length;
    const colunasB = matB[0].length;

    if (colunasA !== linhasB) {
        return "Erro: Colunas de A devem ser iguais às linhas de B.";
    }

    const resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matA[i][k] * matB[k][j];
            }
        }
    }
    return resultado;
}

// Teste prático:
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
console.log("Multiplicação:", multiplicarMatrizes(A, B));
