function calcularMediaCinco(numeros) {
    if (numeros.length !== 5) return console.log("Insira exatamente 5 números.");
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    console.log(`A média dos números é: ${media}`);
}

// Exemplo de uso:
calcularMediaCinco([10, 20, 30, 40, 50]);
