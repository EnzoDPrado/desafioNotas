/*************************************************************************************
 *  Objetivo: Calcular a tabuada de um numero ao outro
 *  Data: 15/08/2022
 *  Autor: Enzo D. Prado
 *  Versão: 1.0
 *************************************************************************************/

console.log('#####Tabuada de um numero ate o outro')

const {calcularTabuada} = require('./modulos/tabuada.js')

const { parse } = require('path');
const { exit } = require('process');
//Import da biblioteca da entrada de dados
var readline = require('readline');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o primeiro multiplicador que voce deseja a tabuada \n', function(valor1){
    entradaDados.question('Digite o ultimo valor que voce deseja que a tabuada va \n', function(valor2){
            calcularTabuada(valor1, valor2);
    })
})