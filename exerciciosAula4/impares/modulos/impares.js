const impares = function(valor1, valor2){
    let inicio = valor1;
    let final = valor2; 
    let par = [];
    let impares = [];

    for(let i = inicio; i <= final; i++){
        if(i % 2 == 0){
            par.push(i);
        }else{
            impares.push(i);
        }
    }

    console.log(`numeros pares: ${par} \n`);
    console.log(`numeros impares: ${impares}`);
}

module.exports = {
    impares
}