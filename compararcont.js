function vetoresSaoIguais(vetorA, vetorB) {
    if (vetorA.length !== vetorB.length) return false;

    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] !== vetorB[i]) return false;
    }
    return true;
}

// Teste prático:
console.log("Teste 1:", vetoresSaoIguais([1, 2, 3], [1, 2, 3])); // true
console.log("Teste 2:", vetoresSaoIguais([1, 2, 3], [1, 4, 3])); // false
