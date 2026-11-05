const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba"];

console.log("--- LISTANDO COM FOREACH ---");
cidades.forEach(function(cidade) {
    console.log("Cidade da lista: " + cidade); 
});

console.log("\n--- MODIFICANDO E DANDO PUSH ---");
cidades[1] = "Mudei o Rio";
cidades.push("Porto Alegre");

console.log("Nova lista de cidades:");
console.log(cidades);
