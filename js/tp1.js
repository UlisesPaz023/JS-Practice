//Ejercicio 1
 const ejercicio1 = function (){
  alert('un mensaje');
 }

//Ejercicio 2
const ejercicio2 = function(){
  document.write('Hello world');
}

//Ejercicio 3
const ejercicio3 = function(){
  document.write(3+5);
}

//Ejercicio 4
const ejercicio4 = function(){
  const nombreUsuario = prompt('Escribe el nombre de usuario:');
  document.write('Hola ',nombreUsuario, '.');
}

//Ejercicio 5
const ejercicio5 = function(){
  const num1 = parseInt(prompt('Escriba un número:'));
  const num2 = parseInt(prompt('Escriba otro número'));
  document.write('La suma es igual a '+ (num1+num2) + '.');
}

//Ejercicio 6
const ejercicio6 = function(){
  const num3 = parseInt(prompt('Escriba un número:'));
  const num4 = parseInt(prompt('Escriba otro número'));

  if((num3 == null && num3 == '') || (num4 == null && num4 == '')){
    document.write('No has ingresado ningún número.');
  } 
  else {
    if (num3>num4){
      document.write('El mayor es '+ num3+ '.');
    } 
    else if (num4>num3){
      document.write('El mayor es '+ num4+ '.');
    }
    else{
      document.write('Los números son iguales.');
    }
  }
}

//Ejercicio 7
const ejercicio7 = function (){
  const num5 = parseInt(prompt('Escriba un número:'));
  const num6 = parseInt(prompt('Escriba otro número:'));
  const num7 = parseInt(prompt('Escriba otro número:'));
  if (num5>num6 && num5>num7){
     document.write('El mayor es ', num5, '.');
  } 
  else if (num6>num7 && num6>num5){
     document.write('El mayor es ', num6, '.');
  }
  else if (num7>num5 && num7>num6){
     document.write('El mayor es ', num7, '.');
  }
  else{
     document.write('Los números son iguales.');
  }
}

//Ejercicio 8
const ejercicio8 = function(){
const num8 = parseInt(prompt('Escriba un número.'));
  if ((num8%2)==0){
     document.write('El número es divisible por dos.');
  }
  else{
     document.write('El número no es divisible por dos.');
  }
}

//Ejercicio 9
const ejercicio9 = function(){
  const inputString = prompt('Ingrese una frase: ').toLowerCase();
  let allVoc = '';
  for(let i=0; i<inputString.length; i++){
     if(inputString[i]=='a' || inputString[i]=='e' || inputString[i]=='i' || inputString[i]=='o' || inputString[i]=='u'){
        allVoc = allVoc + inputString[i];
     }
  }
  document.write(allVoc);
}

//Ejercicio 10 y 11
const ejercicio10 = function(){
  const num9 = parseInt(prompt('Escriba un número: '));
  
  if(num9%2 == 0 || num9%3 == 0 || num9%5 == 0 || num9%7==0){
     document.write(`Es divisible por 2, 3, 5 ó 7.`);
     document.write('<br>');
     document.write(`Es divisible por: `);
     if(num9%2 == 0){
        document.write('2 ');
     }
     if(num9%3 == 0){
        document.write('3 ');
     }
     if(num9%5 == 0){
        document.write('5 ');
     }
     if(num9%7 == 0){
        document.write('8.');
     }
  }
}