//Ejercicio 1
alert('un mensaje');

//Ejercicio 2
document.write('Hello world');
document.write(`<br>`);

//Ejercicio 3
document.write(3+5);
document.write(`<br>`);

//Ejercicio 4
const nombreUsuario = prompt('Escribe el nombre de usuario:');
document.write('Hola ',nombreUsuario, '.');
document.write(`<br>`);

//Ejercicio 5
const num1 = parseInt(prompt('Escriba un número:'));
const num2 = parseInt(prompt('Escriba otro número'));
document.write('La suma es igual a ', num1+num2, '.');
document.write(`<br>`);

//Ejercicio 6
const num3 = parseInt(prompt('Escriba un número:'));
const num4 = parseInt(prompt('Escriba otro número'));
if (num3>num4){
   document.write('El mayor es ', num3, '.');
} 
else if (num4>num3){
   document.write('El mayor es ', num4, '.');
}
else{
   document.write('Los números son iguales.');
}
document.write(`<br>`);

//Ejercicio 7
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
document.write(`<br>`);

//Ejercicio 8
const num8 = parseInt(prompt('Escriba un número.'));
if ((num2%2)==0){
   document.write('El número es divisible por dos.');
}
else{
   document.write('El número no es divisible por dos.');
}
document.write(`<br>`);

//Ejercicio 9
const inputString = prompt('Ingrese una frase: ').toLowerCase();
let allVoc = '';
for(let i=0; i<inputString.length; i++){
   if(inputString[i]=='a' || inputString[i]=='e' || inputString[i]=='i' || inputString[i]=='o' || inputString[i]=='u'){
      allVoc = allVoc + inputString[i];
   }
}
document.write(allVoc);
document.write(`<br>`);

//Ejercicio 10 y 11
const num9 = parseInt(prompt('Escriba un número: '));

if(num9%2 == 0 || num9%3 == 0 || num9%5 == 0 || num9%7==0){
   document.write(`Es divisible por 2, 3, 5 o 7.`);
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