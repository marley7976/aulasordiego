const prompt = require("prompt-sync")();

function verificarTriangulo() {
    const a = parseFloat(prompt("Lado A: "));
    const b = parseFloat(prompt("Lado B: "));
    const c = parseFloat(prompt("Lado C: "));

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            console.log("Triângulo Equilátero (todos os lados iguais).");
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo Isósceles (dois lados iguais).");
        } else {
            console.log("Triângulo Escaleno (todos os lados diferentes).");
        }
    } else {
        console.log("Os valores informados NÃO formam um triângulo válido.");
    }
}

verificarTriangulo();
