function fahrenheitParaCelsius(f) {
    const c = (5 / 9) * (f - 32);
    console.log(`${f}°F equivale a ${c.toFixed(2)}°C`);
}

// Exemplo de uso:
fahrenheitParaCelsius(77); // 25°C
