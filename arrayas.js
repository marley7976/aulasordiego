// 1. Crie um Array com cinco nomes de cidades.
const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba"];

// 2. Mostre todos os nomes no console.
console.log("Cidades iniciais:", cidades);

// 3. Adicione mais uma cidade.
cidades.push("Porto Alegre");
console.log("Após adicionar uma cidade:", cidades);

// 4. Remova a primeira cidade.
cidades.shift();
console.log("Após remover a primeira cidade:", cidades);

// 5. Mostre a quantidade de cidades cadastradas.
console.log("Quantidade de cidades cadastradas:", cidades.length);
