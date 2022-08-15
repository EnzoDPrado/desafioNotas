/*************************************************************************************
 *  Objetivo: Verificacao de numeros impares e pares
 *  Data: 15/08/2022
 *  Autor: Enzo D. Prado
 *  Versão: 1.0
 *************************************************************************************/

 console.log('#####Verificacao de numeros impares e pares####')

const {impares} = require('./modulos/impares.js');

const { parse } = require('path');
const { exit } = require('process');
//Import da biblioteca da entrada de dados
var readline = require('readline');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 entradaDados.question('Digite o valor inicial ( entre 0 e 500 ): ', function(valor1){
    let entrada = parseFloat(valor1);
    if(entrada < 0 || entrada > 500){
        console.log('Valor invalido tente novamente');
        exit();
    }
    else{
        entradaDados.question∑œ ('Digite o segundo valor ( entre 100 e 1000 ):', function(valor2){
            let final = parseFloat(valor2);
            if(final < 100 || final > 1000){
                console.log('Valor invalido, tente novamente');
                exit();
            }
            else{
                if(entrada == final){
                    console.log('os dois valores iguais nao podem ser calculados, tente novamente com numeros diferentes');
                    exit();
                }
                else{
                    impares(entrada, final);
                }
            }
        })
    }
 })

