function gerarTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz.at(0).length;
    const transposta = new Array();

    for (let j = 0; j < colunas; j++) {
        transposta.push(new Array());
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = matriz[i][j];
        }
    }
    return transposta;
}

// Matriz 2x3 (2 linhas e 3 colunas)
const linha1 = new Array(1, 2, 3);
const linha2 = new Array(4, 5, 6);
const exemploMatriz = new Array(linha1, linha2);

console.log("Matriz Original (2x3):");
console.table(exemploMatriz);

console.log("Matriz Transposta (3x2):");
console.table(gerarTransposta(exemploMatriz));
