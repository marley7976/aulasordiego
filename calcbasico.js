function calculadora(operacao, n1, n2) {
    switch (operacao) {
        case 'soma':
            return n1 + n2;
        case 'subtracao':
            return n1 - n2;
        case 'multiplicacao':
            return n1 * n2;
        case 'divisao':
            return n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero!";
        default:
            return "Operação inválida.";
    }
}

// Exemplos de uso:
console.log("Soma (10 + 5):", calculadora('soma', 10, 5));
console.log("Divisão (10 / 0):", calculadora('divisao', 10, 0));
