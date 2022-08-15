
const calcularTabuada = function(valor1, valor2){

    
    let cont = 0;
    let ateUmNumero = valor2;
    let multiplicador = valor1;
    let resultado;

  
    for(let i = 1; i <= ateUmNumero; i++){
        while(multiplicador <= ateUmNumero){
            for(let i = 0; i <=10; i++){
                resultado = multiplicador * i; 
                console.log(`${multiplicador} X ${i} = ${resultado}`)
            }
            multiplicador++ 
        }
    
        
        
    }
  

}

module.exports = {
    calcularTabuada
}
