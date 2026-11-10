function gerarMilAleatorios() {
    const numeros = [];
    for (let i = 0; i < 1000; i++) {
        // Gera inteiros aleatórios de 1 a 1000
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }
    console.log(`Gerados ${numeros.length} números. Primeiros 10:`, numeros.slice(0, 10));
    return numeros;
}

// Exemplo de uso:
gerarMilAleatorios();
