function numeroPorExtenso(numero) {
    const extensos = [
        "", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez",
        "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Vinte"
    ];

    if (numero >= 1 && numero <= 20) {
        console.log(`O número ${numero} por extenso é: ${extensos[numero]}`);
    } else {
        console.log("Número fora do intervalo permitido (1 a 20).");
    }
}

// Exemplo de uso:
numeroPorExtenso(14);
