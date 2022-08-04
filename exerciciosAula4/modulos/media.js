const ValidarNotas = function(nota1, nota2, nota3, nota4)
{
    if((nota1 < 0 || nota1 > 100 || nota1 == null) || (nota2 < 0 || nota2 > 100) || (nota3 < 0 || nota3 > 100) || (nota4 < 0 || nota4 > 100)){
        console.log('Alguma das notas nao foi inserida ou estao invalidas, inicie o programa novamente e tente de novo')
    }

}

const calcularMedia = function(nota1, nota2, nota3, nota4)
{
    let situacao;
    let newExame;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media > 70)
    situacao = 'Aprovado!' 
    else if(media >=50 || media <=69)
    situacao = 'De exame'
    else
    situacao = 'Reprovado' 
    
    
}

