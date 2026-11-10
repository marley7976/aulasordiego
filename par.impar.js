// Exemplo de função para verificar par ou ímpar
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é PAR`;
    } else {
        return `${numero} é ÍMPAR`;
    }
}

// Testando com alguns números
console.log(verificarParImpar(4));  // Saída: 4 é PAR
console.log(verificarParImpar(7));  // Saída: 7 é ÍMPAR
