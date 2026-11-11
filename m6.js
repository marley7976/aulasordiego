const prompt = require("prompt-sync")();

function preencherMatriz4x4() {
    const mat = [];
    for (let i = 0; i < 4; i++) {
        mat[i] = [];
        for (let j = 0; j < 4; j++) {
            mat[i][j] = parseFloat(prompt(`Digite o valor para [${i}][${j}]: `));
        }
    }
    return mat;
}

function imprimirMatriz(mat) {
    console.table(mat);
}

function somarQuadradosPrimeiraColuna(mat) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        soma += mat[i][0] ** 2;
    }
    return soma;
}

function somarTerceiraLinha(mat) {
    // Terceira linha corresponde ao índice 2
    return mat[2].reduce((acc, val) => acc + val, 0);
}

function somarDiagonalPrincipal(mat) {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        soma += mat[i][i];
    }
    return soma;
}

function somarIndiceParSegundaLinha(mat) {
    // Segunda linha corresponde ao índice 1; índices pares são 0 e 2
    let soma = 0;
    for (let j = 0; j < 4; j += 2) {
        soma += mat[1][j];
    }
    return soma;
}

function sistemaMatriz() {
    console.log("--- Preencha a Matriz 4x4 ---");
    const matriz = preencherMatriz4x4();
    let opcao = "";

    while (opcao !== "0") {
        console.log("\n=== MENU MATRIZ 4x4 ===");
        console.log("a) Imprimir todos os elementos da matriz");
        console.log("b) Somar os quadrados da primeira coluna");
        console.log("c) Somar todos os elementos da terceira linha");
        console.log("d) Somar os elementos da diagonal principal");
        console.log("e) Somar elementos de índice par da segunda linha");
        console.log("0) Sair");

        opcao = prompt("Escolha uma opção: ").toLowerCase().trim();

        switch (opcao) {
            case "a":
                imprimirMatriz(matriz);
                break;
            case "b":
                console.log("Soma dos quadrados da 1ª coluna:", somarQuadradosPrimeiraColuna(matriz));
                break;
            case "c":
                console.log("Soma da 3ª linha:", somarTerceiraLinha(matriz));
                break;
            case "d":
                console.log("Soma da diagonal principal:", somarDiagonalPrincipal(matriz));
                break;
            case "e":
                console.log("Soma dos índices pares da 2ª linha:", somarIndiceParSegundaLinha(matriz));
                break;
            case "0":
                console.log("Encerrando programa...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}

sistemaMatriz();
