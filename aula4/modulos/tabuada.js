/*************************************************************************************
 *  Objetivo: Criacao de funcoes para calcular uma tabuada
 *  Data: 04/08/2022
 *  Autor: Enzo D. Prado
 *  Versão: 1.0
 *************************************************************************************/


const calcularTabudaFOR = function(valor)
{
    let tabuada = valor;
    let resultado;

    for(let i = 0; i <= 10; i++){
        let resultado = tabuada * i;
        console.log(`${tabuada} X ${i} = ${resultado}`);
    }
}

const calcularTabuadaWHILE = function(valor)
{
    let tabuada = valor;
    let resultado;
    let cont = 0;

    while(cont <=10)
    {
        resultado = tabuada * cont;
        console.log(`${tabuada} X ${cont} = ${resultado}`);
        cont++;
    }
   
}

module.exports = {
    calcularTabudaFOR, calcularTabuadaWHILE
}