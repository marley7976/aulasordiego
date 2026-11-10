function isPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function verificarPrimo(n) {
    console.log(`O número ${n} ${isPrimo(n) ? "é" : "não é"} primo.`);
}

// Exemplo de uso:
verificarPrimo(29); // É primo
verificarPrimo(12); // Não é primo
