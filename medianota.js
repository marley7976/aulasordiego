function avaliarAluno(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`Média final do aluno: ${media.toFixed(2)}`);

    if (media >= 7) {
        console.log("Status: ALUNO APROVADO");
    } else {
        console.log("Status: ALUNO REPROVADO");
        
        // Critério do Exercício 10: Se a média for entre 5.0 e 6.9, tem direito a recuperação
        if (media >= 5) {
            console.log("Recuperação: O aluno TEM DIREITO a fazer a recuperação.");
        } else {
            console.log("Recuperação: O aluno NÃO TEM DIREITO à recuperação (Nota muito baixa).");
        }
    }
}

// Exemplos de uso:
avaliarAluno(6, 5, 5.5); // Reprovado, mas com direito a recuperação
avaliarAluno(8, 7, 9);   // Aprovado
