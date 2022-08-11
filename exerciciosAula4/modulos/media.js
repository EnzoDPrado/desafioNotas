const validarNotas = function(nota1, nota2, nota3, nota4)
{
    if((nota1 > 0 || nota1 < 100 || nota1 == null) || (nota2 > 0 || nota2 < 100 || nota2 == null) || (nota3 > 0 || nota3 < 100 || nota3 == null) || (nota4 > 0 || nota4 < 100 || nota4 == null)){
        return true;
    }

    return false;

}




const mediaCalculate = function(val1, val2, val3, val4)
{
let media  = (val1 + val2 + val3 + val4) / 4;
return media;
}



const mediaCheck = function(media)
{
    let situacao;

    if(media > 70){
    situacao = 'Aprovado!'
    console.log(situacao);
    } 
    else if(media >=50 || media <=69){
    situacao = 'De exame'
    console.log(situacao);
    }
    else{
    situacao = 'Reprovado'
    console.log(situacao);
    }

    return situacao;    
}

const exameRecup = function(media, novaNota){
    let mediaNova; 
    mediaNova = (media + novaNota) / 2
    return mediaNova;

    
}




const relatorioFinal = function(sexo, aluno, situacao, disciplina, curso, professor,sexoProfessor, nota1, nota2, nota3, nota4, notaDoExame, mediaFinal, mediaExame){
    if(sexo == 'feminino'){
        console.log(`A aluna ${aluno} foi ${situacao} na disciplina ${disciplina} \nCurso: ${curso} \n `);
        if(sexoProfessor == feminino)
            console.log(`Professora: ${professor}`);
        else
            console.log(`Professor: ${professor}`);
        if(notaDoExame == null || mediaExame == null)
        console.log(`Notas da aluna: ${nota1} ${nota2} ${nota3} ${nota4} \n Media final: ${mediaFinal}`);
        else
        console.log(`Notas da aluna: ${nota1} ${nota2} ${nota3} ${nota4} ${notaDoExame} \n Media final: ${mediaFinal} \n Media final do Exame: ${mediaExame}`);
    }
    else{
        console.log(`O aluno ${aluno} foi ${situacao} na disciplina ${disciplina} \nCurso: ${curso} \n `);
        if(sexoProfessor == 'feminino')
            console.log(`Professora: ${professor}`);
        else
            console.log(`Professor: ${professor}`);
        if(notaDoExame == null || mediaExame == null)
        console.log(`Notas do aluno: ${nota1} ${nota2} ${nota3} ${nota4} \nMedia final: ${mediaFinal}`);
        else
        console.log(`Notas do aluno: ${nota1} ${nota2} ${nota3} ${nota4} ${notaDoExame} \nMedia final: ${mediaFinal} \nMedia final do Exame: ${mediaExame}`);
    }

}

const validarSexo = function(sexoPessoa){
    let sexo;
    sexo = sexoPessoa.toLowerCase();
    
    if((sexo === 'masculino') && (sexo === 'feminino')){
        console.log('sexo validado!');
        return sexo;
    }
    else{
        console.log('sexo invalido! Tente novamente');
        
    }
}

module.exports = {
    validarNotas,
    mediaCalculate,
    mediaCheck,
    relatorioFinal,
    validarSexo,
    exameRecup,
    


}




