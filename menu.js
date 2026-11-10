function menuGeometrico(opcao, dados) {
    switch (opcao) {
        case 1: // Retângulo: dados = { base, altura }
            const areaRet = dados.base * dados.altura;
            const perimetroRet = 2 * (dados.base + dados.altura);
            console.log(`Retângulo -> Área: ${areaRet} | Perímetro: ${perimetroRet}`);
            break;
        case 2: // Quadrado: dados = { lado }
            const areaQuad = dados.lado ** 2;
            const perimetroQuad = dados.lado * 4;
            console.log(`Quadrado -> Área: ${areaQuad} | Perímetro: ${perimetroQuad}`);
            break;
        case 3: // Circunferência: dados = { raio }
            const areaCirc = Math.PI * (dados.raio ** 2);
            const perimetroCirc = 2 * Math.PI * dados.raio;
            console.log(`Circunferência -> Área: ${areaCirc.toFixed(2)} | Perímetro: ${perimetroCirc.toFixed(2)}`);
            break;
        case 4: // Triângulo: dados = { ladoA, ladoB, ladoC }
            const perimetroTri = dados.ladoA + dados.ladoB + dados.ladoC;
            console.log(`Triângulo -> Perímetro: ${perimetroTri}`);
            break;
        default:
            console.log("Opção inválida no Menu.");
    }
}

// Exemplos de uso:
menuGeometrico(1, { base: 10, altura: 5 });
menuGeometrico(3, { raio: 4 });
