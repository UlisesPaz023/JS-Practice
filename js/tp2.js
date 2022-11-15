/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
const ejercicio1 = function () {
    let edad = prompt('Ingrese la edad: ');
    if (!isNaN(edad) && edad !== '') {
        if (edad > 18) {
            alert('Puede conducir.');
        }
        else {
            alert('No puede conducir.');
        }
    }
    else {
        alert('No es un número.');
    }
}

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/
const ejercicio2 = function () {
    let nota = parseInt(prompt('Ingrese una nota: '));

    if (isNaN(nota) && nota !== '') {
        alert('Número inválido ó sin ingresar.');
    }
    else {
        switch (nota) {
            case 0:
            case 1:
            case 2:
                alert('Muy deficiente.');
                break;
            case 3:
            case 4:
                alert('Insuficiente.');
                break;
            case 5:
            case 6:
                alert('Suficiente.');
                break;
            case 7:
                alert('Bien');
                break;
            case 8:
            case 9:
                alert('Notable.');
                break;
            case 10:
                alert('Sobresaliente.');
                break;
            default:
                alert('Número erróneo.');
                break;
        }
    }
}

/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/
const ejercicio3 = function () {
    let confirmar = confirm('Ingrese cadenas de texto, para detener pulse "cancelar".');
    let cadena1;
    let cadena2 = '';

    do {
        cadena1 = prompt('Ingrese cadena : ');
        cadena2 = cadena2.concat('-', cadena1);
        confirmar = confirm('Ingrese cadenas de texto, para detener pulse "cancelar".');
    } while (confirmar);

    cadena2 = cadena2.substring(1, (cadena2.length));

    if (cadena2 == null || cadena2 == '') {
        alert('La cadena es vacía.');
    }
    else {
        alert(cadena2);
    }
}

/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
const ejercicio4 = function () {
    let confirmar = confirm('Ingrese números, pulse "cancelar" para detener la ejecución.');
    let numero;
    let sumaTotal = 0;

    do {
        numero = parseInt(prompt('Ingrese número.'));
        if (isNaN(numero)) {
            alert('No es un número.');
        }
        else {
            sumaTotal = sumaTotal + numero;
        }
        confirmar = confirm('¿Desea ingresar más números?.');
    } while (confirmar);
    alert('La suma total es ' + sumaTotal + '.');
}


/* 5- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:
1
22
333
4444
55555
666666*/
const ejercicio5 = function () {
    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write('</br>');
    }
}

/* 6- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/
const ejercicio6 = function () {
    let cantidad = parseInt(prompt('Ingrese número no mayor a 50.'));
    let numero = '';
    if (cantidad > 50) {
        alert('El número ingresado no es menor a cincuenta.');
    }
    else {
        for (let i = cantidad; i > 0; i--) {
            for (let j = cantidad; j > cantidad - i; j--) {
                document.write(i);
            }
            document.write('</br>');
        }
    }
}

/* 7- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……*/
const ejercicio7 = function () {
    let cantidad = parseInt(prompt('Ingrese número no mayor a 50.'));
    let numero = '';

    if (cantidad > 50) {
        alert('El número ingresado no es menor a cincuenta.');
    }
    else {
        for (let i = 0; i < cantidad; i++) {
            numero = numero.concat(i + 1);
            document.write(numero);
            document.write('</br>');
        }
    }
}

/* 8- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.*/
const ejercicio8 = function () {
    for (let i = 1; i <= 500; i++) {
        document.write(i);
        if (!(i % 9 === 0) && (i % 4 === 0)) {
            document.write(' (Múltiplo de 4)');
        }
        else if ((i % 9 === 0) && !(i % 4 === 0)) {
            document.write(' (Múltiplo de 9)');
        }
        else if ((i % 9 === 0) && (i % 4 === 0)) {
            document.write(' (Múltiplo de 4 y 9)');
        }
        if (i % 5 === 0) {
            document.write('<hr>');
        }
        else {
            document.write('</br>');
        }
    }
}

/*  9- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
const ejercicio9 = function () {
    let x = parseInt(prompt('Ingrese número de fila.'));
    let y = parseInt(prompt('Ingrese número de columna.'));
    let tabla = x * y;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            document.write(tabla + ', ');
            tabla--;
        }
        document.write('</br>');
    }
}

/* 10- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :

- El número debe ser entre 0 y 99999999.
- Debemos calcular el resto de la división entera entre el número y el número 23.
- Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
- Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
- Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/
const ejercicio10 = function () {
    let resultado = 0;
    let letra;
    let confirmar = confirm('Ingresar DNI. Debe ser entre 0 y 99999999.');
    while(confirmar) {
        let dni = parseInt(prompt('Ingresar número de DNI.'));
        if (isNaN(dni)) {
            alert('No es un número');
        }
        else if (dni<0 || dni>99999999){
            alert('Número erróneo.');
        }
        else if (dni==null){
            alert('Ningún número ingresado.'); 
        }
        else{
            resultado = parseInt(dni % 23);
            switch (resultado) {
                case 0:
                    letra = 'T';
                    break;
                case 1:
                    letra = 'R';
                    break;
                case 2:
                    letra = 'W';
                    break;
                case 3:
                    letra = 'A';
                    break;
                case 4:
                    letra = 'G';
                    break;
                case 5:
                    letra = 'M';
                    break;
                case 6:
                    letra = 'Y';
                    break;
                case 7:
                    letra = 'F';
                    break;
                case 8:
                    letra = 'P';
                    break;
                case 9:
                    letra = 'D';
                    break;
                case 10:
                    letra = 'X';
                    break;
                case 11:
                    letra = 'B';
                    break;
                case 12:
                    letra = 'N';
                    break;
                case 13:
                    letra = 'J';
                    break;
                case 14:
                    letra = 'Z';
                    break;
                case 15:
                    letra = 'S';
                    break;
                case 16:
                    letra = 'Q';
                    break;
                case 17:
                    letra = 'V';
                    break;
                case 18:
                    letra = 'H';
                    break;
                case 19:
                    letra = 'L';
                    break;
                case 20:
                    letra = 'C';
                    break;
                case 21:
                    letra = 'K';
                    break;
                case 22:
                    letra = 'E';
                    break;
            }
            alert('El resultado es ' + resultado + ' y su letra correspondiente es ' + letra + '.');
        }
        confirmar = confirm('Desea ingresar otro DNI.');
    }
}

/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. Nota: ver función: Math().*/
const ejercicio11 = function(){
    let edad = [];
    let nombre = [];
    for(let i=0;i<3;i++){
        nombre[i] = prompt('Ingrese nombre '+(i+1)+'.');
        edad[i] = parseInt(prompt('Ingrese edad '+(i+1)+'.'));  
        if(isNaN(edad[i]) || edad[i] === '' || nombre[i] === ''){
            alert('Edad o nombre erróneos.');
            i--;
        }
    }
    let may = Math.max(...edad);
    let idx = edad.indexOf(may);
    alert('El mayor es ' + nombre[idx] +'.');
}

/*12- Realiza un script que genere un número aleatorio entre 1 y 99.*/
const ejercicio12 = function(){
    const numero = Math.floor(Math.random()*99+1);
    alert('El número generado es '+ numero +'.');
}

/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/
const ejercicio13 = function(){
    let texto = prompt('Ingrese texto.').toUpperCase();
    alert(texto);
}

/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/
const ejercicio14 = function(){
    let cadena = prompt('Ingresar cadena de texto.');
    let valor = '';

    if(cadena === ''){
        alert('No ingresaste ninguna cadena de texto.');
    } else {
        for(let i=0; i<(cadena.length); i++){
            valor += (cadena[i]+'-');
        }
        alert(valor.substring(0, (valor.length)-1));
    }
}

/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/
const ejercicio15 = function(){
    let texto = prompt('Ingresar texto.');
    let vocal = 0;
    for(let i=0; i<texto.length; i++){
        switch(texto[i]){
            case 'A':
            case 'a':
            case 'E':
            case 'e':
            case 'I':
            case 'i':
            case 'O':
            case 'o':
            case 'U':
            case 'u':
                vocal++;
                break;
        }
    }
    alert(vocal+' vocal/es.');
}

/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/
const ejercicio16 = function(){
    let cadena = prompt('Ingrese cadena de texto.');
    let aux = '';

    if(cadena !== ''){
        for(let i=cadena.length-1;i>=0;i--){
            aux += cadena[i];
        }
        alert(aux);
    } else{
        alert('No ingresaste ninguna cadena de texto.');
    }
}

/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/
const ejercicio17 = function(){
    let texto = prompt('Ingrese texto.');
    let valor = 0;

    if(texto !== ''){
        for(let i=texto.length-1; i>=0; i--){
            switch(texto[i]){
                case 'A':
                case 'a':
                case 'E':
                case 'e':
                case 'I':
                case 'i':
                case 'O':
                case 'o':
                case 'U':
                case 'u':
                    valor = i;
                    break;
            }
        }
        alert('La posición de la primera vocal es '+ valor +'.');
    } else{
        alert('No ingresaste ningún texto.');
    }

    //otro método.
    // for(let i=0; i<texto.length; i++){
    //     switch(texto[i]){
    //         case 'A':
    //         case 'a':
    //         case 'E':
    //         case 'e':
    //         case 'I':
    //         case 'i':
    //         case 'O':
    //         case 'o':
    //         case 'U':
    //         case 'u':
    //             valor = i;
    //             i = texto.length;
    //             break;
    //     }
    // }
}