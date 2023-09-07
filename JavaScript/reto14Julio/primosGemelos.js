var numeroRango=9

/*Confirmar si es un numero primo, si es un numero primo no imprime nada, si NO es numero primo este imprime algo*/
for(var i=2 ; i<=numeroRango-1 ; i++){
    if(numeroRango%i==0){
        console.log(numeroRango);
        console.log("No es primo");
    }
}


for(var i=2 ; i<=numeroRango-1 ; i++){

    for(var j=2 ; j<=i ; j++){
        if(j%i==0){
            console.log(j)
        }
    }
        
}