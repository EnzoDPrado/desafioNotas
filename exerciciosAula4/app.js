/*************************************************************************************
 *  Objetivo: Criar um sistema que gerencia as medias escolares de uma universidade
 *  Data: 04/08/2022
 *  Autor: Enzo D. Prado
 *  Versão: 1.0
 *************************************************************************************/

console.log('######### Sistemas para validar notas e cadastrar ########');

//Importando biblioteca media que foi criada para functions
const{ validarNotas }   = require('./modulos/media.js');
const{ mediaCalculate } = require('./modulos/media.js');
const{ mediaCheck }     = require('./modulos/media.js');
const{ relatorioFinal } = require('./modulos/media.js');

//Import da biblioteca da entrada de dados
var readline = require('readline');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Insira o nome do aluno: ', function(nomeAluno){
    entradaDados.question('Insira o sexo do aluno: ', function(alunoSexo){
        alunoSexo.toLowerCase;
            entradaDados.question('Insira o nome do professor: ', function(nomeProf){
                entradaDados.question('Insira o sexo do professor: ', function(sexoProf){
                    sexoProf.toLowerCase;
                        entradaDados.question('Insira o nome do curso: ', function(nomeCurso){
                            entradaDados.question('Insira as suas notas durante o curso, digite a 1: ', function(nota1){
                                entradaDados.question('Insira a 2: ', function(nota2){
                                    entradaDados.question('Insira a 3: ', function(nota3){
                                        entradaDados.question('Insira a 4: ', function(nota4){
                                            let check = validarNotas(nota1, nota2, nota3, nota4);
                                            if(check == false){
                                                console.log('Algum dos valores inseridos e invalido!')
                                            }
                                        })
                                    })
                                })
                            })
                        })
                })
            })
    })
})




