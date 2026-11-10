function inverterString(texto) {
    // Converte para string caso seja enviado um número puro
    const textoStr = String(texto); 
    
    const textoInvertido = textoStr.split('').reverse().join('');
    
    console.log(`Original: ${texto} | Invertido: ${textoInvertido}`);
    return textoInvertido;
}

// Exemplos de uso:
inverterString("849");
inverterString("javascript");
