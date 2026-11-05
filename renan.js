
// comentário de uma linha

/**************************
    comentário de linhas
    outra linha de comentário
    mais uma
*/

// entrada -> pela web através de formulários ou eventos do DOM
// saída -> console do navegador ou pra página através de tag

// entrada de dados -> acontece pelo terminal
// saída dos dados -> acontece pelo terminal

/************************************* 
* VARIAVEIS
*  É uma caixa que armazena um tipo de valor na memoria do computador
*  no javascript podemos criar uma variavel de 3 formas


let idade = 10;     // sintaxe mais moderna do javascript
var Idade = 41;    // sintaxe mais antiga do javascript
const _idade = 32; // um valor que não pode ser alterado
*/
/***************************************
 * Tipos de dados
 * cada caixa tem um tipo de dado
 

// STRING - sequencia de caracteres
let nome = "João";

// NUMBER - numeros decimais ou inteiros
let IDADE = 40; // numero inteiro
let Altura = 1.75; // numero fracionado(com virgula)

// BOOLEAN - verdadeiro ou falso
let Aprovado = true;
var Dinheiro = false;

// UNDEFINED - a variavel não foi atribuida
let cidade;

// NULL - ausência intencional de valor
let telefone = null

// Retorno dos dados
console.log(nome)
console.log(IDADE)
console.log(Altura)
console.log(Aprovado)
console.log(Dinheiro)
console.log(cidade);
console.log(telefone);

// Retorno dos tipos
console.log(typeof nome)
console.log(typeof IDADE)
console.log(typeof Altura)
console.log(typeof Aprovado)
console.log(typeof Dinheiro)
console.log(typeof cidade);
console.log(typeof telefone);
*/

/*******************************
 * operadores aritméticos
 * são usados para realizar cálculos matemáticos
 

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2); // soma
console.log(numero1 - numero2); // subtração
console.log(numero1 * numero2); // multiplicação
console.log(numero1 / numero2); // divisão
console.log(numero1 % numero2); // resto da divisao
console.log(numero1 ** 2); // exponenciacao

/*********************************
 * operadores condicionais
 * são usados quando queremos 
 * que o código tome uma decisao


let idade = 35;

console.log(idade < 18);
console.log(idade > 18);
console.log(idade <= 18);
console.log(idade >= 18);

console.log(idade == 18); 
console.log(idade < 18);
console.log(idade < 18);

let number1 = "15";
let number2 = 15;

console.log(number1 == number2);
console.log(number1 === number2);
console.log(idade != 18);
 */

/***************************************
 * operadores lógicos
 * são usados quando queremos juntas operadores
 * condicionais
 */
let idade = 20;
let possuiCarteira = true;

//     &&   - multiplicação 
//     ||   - soma binario
//     !    - negação
/* and - &&
 * 0 | 0 | 0
 * 0 | 1 | 0
 * 1 | 0 | 0
 * 1 | 1 | 1
 * 
 * our - ||
 * 0 | 0 | 0
 * 0 | 1 | 1
 * 1 | 0 | 1
 * 1 | 1 | 1
 */
console.log(idade > 18 && possuiCarteira); // verdadeiro

idade = 16;
possuiCarteira = false;

console.log(idade > 18 || possuiCarteira); // verdadeiro

let Gasolina = false;
console.log(!Gasolina);

/****************************************
 * conversão de tipos - cast
 * converte texto para numero
 */
let numero1 = "10"; // string
let numero2 = "20"; // string

console.log(typeof numero1);
console.log(typeof numero2);

numero1 = Number(numero1);
console.log(typeof numero1);