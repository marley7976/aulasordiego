function matrizSomaLinhasColunas() {
    const linhas = 10;
    const colunas = 15;
    const MAT = [];

    // Construindo matriz com inteiros aleatórios de 1 a 10
    for (let i = 0; i < linhas; i++) {
        MAT[i] = [];
        for (let j = 0; j < colunas; j++) {
            MAT[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    console.log("--- SOMA DAS LINHAS ---");
    for (let i = 0; i < linhas; i++) {
        const somaLinha = MAT[i].reduce((acc, val) => acc + val, 0);
        const paridade = somaLinha % 2 === 0 ? "PAR" : "ÍMPAR";
        console.log(`Linha ${i}: Soma = ${somaLinha} (${paridade})`);
    }

    console.log("\n--- SOMA DAS COLUNAS ---");
    for (let j = 0; j < colunas; j++) {
        let somaColuna = 0;
        for (let i = 0; i < linhas; i++) {
            somaColuna += MAT[i][j];
        }
        const paridade = somaColuna % 2 === 0 ? "PAR" : "ÍMPAR";
        console.log(`Coluna ${j}: Soma = ${somaColuna} (${paridade})`);
    }
}

matrizSomaLinhasColunas();
