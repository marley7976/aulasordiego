/**********************
 1) Crie um exercício que solicite um número e mostre todos os números
    até o número informado:  
 */

    const prompt = require("prompt-sync")();

    let numero_digitado = prompt("Digite um número: ");
    for (let i = 1; i <= numero_digitado; i++) {
        console.log(i);
    }