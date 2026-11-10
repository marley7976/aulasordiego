/**************************
 * Marley Renan
 * versão: 01
 * data:06/11/2026
 * projeto Batalha Naval no node.js
 *
 */

const teclado = require('prompt-sync')();

//variáveis do ambiente
let Tamanho_Mapa = 5;
let Tamanho_barco = 5;
let Quant_Tiros = 5; // ADICIONADO: Criada a variável de tiros

// cria uma matriz
let tabuleiro = [];

// preenche o mapa com agua
for(let linha = 0; linha < Tamanho_Mapa; linha++) {
    // cria o mapa do jogo
    tabuleiro[linha] = [];
    for(let coluna = 0; coluna < Tamanho_Mapa; coluna++) { 
        tabuleiro[linha][coluna] = false;
    }
}
    
/******
 * false = agua
 * true = navio
 */
console.log("Tabuleiro Secreto (Apenas para teste):");
console.log(tabuleiro);

// Posiciona os barcos aleatoriamente
for(let linha = 0; linha < Tamanho_barco; linha++) {
    let posicaoX = parseInt(Math.floor(Math.random() * 5));
    let posicaoY = parseInt(Math.floor(Math.random() * 5));
    tabuleiro[posicaoX][posicaoY] = true; 
}

console.log("\nTabuleiro com os barcos posicionados:");
console.log(tabuleiro);

/*****
 * jogada do player
 */

// CORRIGIDO: Loop controlado por uma variável 'i' correta enquanto houver tiros
for(let i = 0; i < Quant_Tiros; i++) {
    console.log(`\n--- Você tem mais ${Quant_Tiros - i} tentativas ---`);
    
    let TiroPosicaoX = parseInt(teclado("Digite a coordenada em x (0 a 4): "));
    let TiroPosicaoY = parseInt(teclado("Digite a coordenada em y (0 a 4): "));

    // verifica se não é numero ou fora do limite
    if(isNaN(TiroPosicaoX) || isNaN(TiroPosicaoY) || TiroPosicaoX < 0 || TiroPosicaoX >= Tamanho_Mapa || TiroPosicaoY < 0 || TiroPosicaoY >= Tamanho_Mapa) {
        console.log("Digite coordenadas válidas entre 0 e 4!");
        i--; // Reduz o contador para não gastar a jogada errada
        continue; // Volta para o início do loop pedir os números de novo
    }

    if(tabuleiro[TiroPosicaoX][TiroPosicaoY] === true) { 
        // acertou um barco
        console.log("***************************************");
        console.log("********** BARCO NAUFRAGADO ***********");
        console.log("***************************************");
        tabuleiro[TiroPosicaoX][TiroPosicaoY] = false; // Remove o barco para não acertar o mesmo de novo
    } else {
        // acertou na agua
        console.log("***************************************");
        console.log("************ TIRO NA AGUA *************");
        console.log("***************************************");
    }
} 

console.log("\nFim de jogo!");
