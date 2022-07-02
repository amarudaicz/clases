//lo mejor es ocupar el menor espacio de memoria
//boleans son mas livianos que los numeros
//una variable es un espacio de memoria asociaso a un valor
//es una forma de almacenar el valor de algo para usarlo mas adelante
//definir variables con LET
//una funcion es una forma de encapsular ciertas instrucciones para no repertir las mismas una y otra vez y al mismo tiempo poder darle parametros para que utilice dentro de dichas instrucciones

//FU
//funcion para sumar dos numeros
function sumarDosNumeros(numero1, numero2){
    return numero1 + numero2
}//una funcion recive parametros los ejecuta y te devuelve un valor

console.log(sumarDosNumeros(2,3))

console.log(sumarDosNumeros(4, 10))
console.log(sumarDosNumeros(100, 200))//se define la funcion y luego se la utiliza donde quieras

//funcion Restar Ejemplo
function restar(Numero1, Numero2) {
    return Numero1 - Numero2
}
console.log(restar (10,5))

//Funcion comprobar Ejemplo
function compruebe(numero1, numero2) {
    
    if (numero1 > 0 && numero2<0){
            console.log("hello word") 
        } 
        
    else{
        console.log("wasasasasasa")
    }
}
console.log(compruebe(10,1))
if(5==5)console.log("es igual pues")//if sin los {}




//ESTRUCTURAS DE CONTROL

//IF

//FOR estructura repetitiva

for (let i=0; i <Array.length; i++){
    //do something
}

let array = "ale"
for (let i = 0; i < array.length; i++) {
  console.log("La variable sigue siendo 3")
}

//WHILE
let result = "0";
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 8);

console.log(result);


//OPERADORES LOGICOS
5>4//5 es mayor que 4 TRUE
5>=5//5 es mayor o igual que 5 TRUE
5==0//5 es igual a 0 FALSE
5<4//5 es menor que 4 FALSE
5<=4//5 es menor o igual que 4 FALSE
5==5//5 es igual a 5 TRUE


//ESTRUCTURAS SELECTIVAS


//usar swich cuando tenes muchos IF
switch (variable) {
    case value:
        //condicion
        break;
    
    case value:
        //condicion
        break;

    default:
        //cortar la ejecucion
        break;
}








