const prompt = require("prompt-sync")();

function calcularCompra() {
    const valorTotal = parseFloat(prompt("Digite o valor total da compra (R$): "));
    const qtdItens = parseInt(prompt("Digite a quantidade de itens: "), 10);

    let valorFinal = valorTotal;

    if (valorTotal > 100 || qtdItens > 5) {
        valorFinal = valorTotal * 0.90; // Desconto de 10%
        console.log("Desconto de 10% aplicado!");
    } else {
        console.log("Sem desconto aplicável.");
    }

    console.log(`Valor final a pagar: R$ ${valorFinal.toFixed(2)}`);
}

calcularCompra();
