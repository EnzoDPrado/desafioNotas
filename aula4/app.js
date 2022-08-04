/*************************************************************************************
 *  Objetivo: Aplicar estruturas de repeticao (While e for)
 *  Data: 04/08/2022
 *  Autor: Enzo D. Prado
 *  Versão: 1.0
 *************************************************************************************/

console.log('#### Calcular uma tabuada simples ####')

const { calcularTabudaFOR } = require('./modulos/tabuada.js');

//Import da biblioteca da entrada de dados
var readline = require('readline');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite a tabuada a ser calculada e exibida \n', function(numero){
    let tabuada = numero;
    calcularTabudaFOR(tabuada);

})

