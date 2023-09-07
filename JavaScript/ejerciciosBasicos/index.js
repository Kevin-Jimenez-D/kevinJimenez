console.log("Ejercicio 1");

function edad(x){
    var nacimiento=2023-x;
    console.log("Naciste en el año");
    console.log(nacimiento);
}

edad(26)


console.log("Ejercicio 2");

function celsiusFahrenheit(x){
    var celsius=x;
    var F=32+(9*celsius/5);
    console.log("La temperatura en grados Fahrenheit es de: ");
    console.log(F);
}

celsiusFahrenheit(30)

console.log("Ejercicio 3");

function descuento(x){
    var orden=x;

    if(x<=20){
        console.log("Tiene 30% de descuento");
    }
    else if(x<=50){
        console.log("Tiene 10% de descuento");
    }
    else{
        console.log("Error");
    }
}

descuento(21)

console.log("Ejercicio 4 parte 1");

function numPares(x){
    var suma=0

    for(var i=2 ; i<=x ; i=i+2){
        suma=suma+i
    }
    console.log(suma);
}

numPares(578934);

console.log("Ejercicio 4 parte 2");

function numImpares(x){
    var suma=0

    for(var i=1 ; i<=x ; i=i+2){
        suma=suma+i
    }
    console.log(suma);
}

numImpares(578934)


console.log("Ejercicio 5");
/*
function triRect(){
    var suma=0

    for(var i=1 ; i<=3 ; i=i++){
        for(var j=1 ; j<=i ; j=j++){
            console.log(j)
        }
    }
}

triRect()

*/