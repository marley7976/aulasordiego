function encontrarMaior(n1, n2, n3) {
    const maior = Math.max(n1, n2, n3);
    console.log(`O maior número entre [${n1}, ${n2}, ${n3}] é: ${maior}`);
}

// Sem essa linha abaixo, o código não executa a função!
encontrarMaior(15, 42, 23); 
