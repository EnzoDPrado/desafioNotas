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
const{ validarSexo }    = require('./modulos/media.js');
const{ exameRecup }     = require('./modulos/media.js');

//Import da biblioteca da entrada de dados
var readline = require('readline');
const { exit } = require('process');

//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let media;
let verificacaoDaNota;
let num1;
let num2;
let num3;
let num4;
let sexoAluno = '';
let sexoProf = '';

entradaDados.question('Insira o nome do aluno: ', function(nomeAluno){
    entradaDados.question('Insira o sexo do aluno: \nfeminino \nmasculino \n', function(alunoSexo){
        sexoAluno = alunoSexo.toLowerCase();
        if(!sexoAluno == 'feminino' || (sexoAluno != 'masculino')){
            console.log('Valor invalido, tente novamente');
            exit();
        }
        else
        {
            entradaDados.question('Insira o nome do professor: ', function(nomeProf){
            entradaDados.question('Insira o sexo do professor: \nfeminino \n masculino ', function(ProfSexo){
                sexoProf = ProfSexo.toLowerCase();
                if(!sexoAluno == 'feminino' || (sexoAluno != 'masculino')){
                    console.log('Valor invalido, tente novamente');
                    exit();
                }
                else{
                    entradaDados.question('Insira o nome do curso: ', function(nomeCurso){
                        entradaDados.question('Insira o nome da discplina', function(nomeDisciplina){
                            entradaDados.question('Insira as suas notas durante o curso, digite a 1: ', function(nota1){
                                entradaDados.question('Insira a 2: ', function(nota2){
                                    entradaDados.question('Insira a 3: ', function(nota3){
                                        entradaDados.question('Insira a 4: ', function(nota4){
                                            num1 = parseFloat(nota1);
                                            num2 = parseFloat(nota2);
                                            num3 = parseFloat(nota3);
                                            num4 = parseFloat(nota4);
    
                                            let check = validarNotas(num1, num2, num3, num4);
                                            if(check == false)
                                            {
                                                console.log('Algum dos valores inseridos e invalido!')
                                            }
                                            else
                                            {
                                                media = mediaCalculate(num1, num2, num3, num4);
                                                console.log(media);
                                                verificacaoDaNota = mediaCheck(media);
    
                                                if(media >=50 && media <=69){
                                                    console.log('O aluno ficou de exame e agora precisa fazer um teste para poder passar')
                                                        entradaDados.question('Insira a nota do exame de recuperacao: ', function(notaDoExame){
                                                            let holdMedia = parseFloat(notaDoExame);
                                                            let teste = parseFloat(notaDoExame);
                                                            teste = exameRecup(media, teste);
                                                            if(teste > 60 ){
                                                                verificacaoDaNota = 'Aprovado'
                                                                relatorioFinal(sexoAluno, nomeAluno, verificacaoDaNota, nomeDisciplina, nomeCurso, nomeProf, sexoProf,num1, num2, num3, num4, teste, media,holdMedia )
                                                            }else{
                                                                console.log('Voce foi reprovado!');
                                                                verificacaoDaNota = 'Reprovado!'
                                                            }
                                                        })
                                                }else{
                                                    relatorioFinal(sexoAluno, nomeAluno, verificacaoDaNota, nomeDisciplina, nomeCurso, nomeProf, sexoProf,num1, num2, num3, num4, null, media,null )
                                                }
                                                    
                                            }
                                        })
                                    })
                                })
                            })
                        })
                        
                    })
                }
                    
            })
        })}

            
    })  

})




