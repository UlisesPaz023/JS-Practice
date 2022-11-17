/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/
const ejercicio1 = function(){
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    alert(meses[0]+'\n'+meses[1]+'\n'+meses[2]+'\n'+meses[3]+'\n'+meses[4]+'\n'+meses[5]+'\n'+meses[6]+'\n'+meses[7]+'\n'+meses[8]+'\n'+meses[9]+'\n'+meses[10]+'\n'+meses[11]);
}

/*2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const ejercicio2 = function(){
    let ciudades = [];
    let confirmar;
    let ciudad;
    do{
        ciudad = prompt('Ingrese ciudad');
        if(ciudad !== null){
            ciudades.push(ciudad);
        } else {
            ciudad = prompt('Ningún texto ingresado.'); 
        }
        confirmar = confirm('¿Deseas ingresar otra ciudad?.');
    }while(confirmar);
    alert('Arreglo generado: '+ciudades+'\n\nLongitud: '+ciudades.length);
    document.write('Primera posición: '+ciudades[0] +'<br>Tercera posición: '+ ciudades[2] +'<br>Última posición: '+ ciudades[ciudades.length-1]);
    confirmar = confirm('Se añadirá la ciudad de París en la última posición.');
    ciudades.push("París"); // Se añade París en la última posición.
    document.write('<br>Segunda posición: '+ciudades[1]);
    ciudades.splice(1,1,"Barcelona");
    document.write('<br>Primera posición: '+ciudades[0] +'<br>Segunda posición: '+ ciudades[1] +'<br>Última posición: '+ ciudades[ciudades.length-1]);
}

/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/
const ejercicio3 = function(){
    let resultado = 0;
    let v1=0, v2=0, v3=0, v4=0, v5=0, v6=0, v7=0, v8=0, v9=0, v10=0, v11=0, v12=0;

    for(let i=0; i<50;i++){
        const dado1 = Math.floor(Math.random()*6+1);
        const dado2 = Math.floor(Math.random()*6+1);
        resultado = dado1 + dado2;
    
        switch (resultado){
            case 1:
                v1++;
                break;
            case 2:
                v2++;
                break;
            case 3:
                v3++;
                break;
            case 4:
                v4++;
                break;
            case 5:
                v5++;
                break;
            case 6:
                v6++;
                break;
            case 7:
                v7++;
                break;
            case 8:
                v8++;
                break;
            case 9:
                v9++;
                break;
            case 10:
                v10++;
                break;
            case 11:
                v11++;
                break;
            case 12:
                v12++;
                break;
        }
        const array = [v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12];
        alert('El resultado nro '+(i+1)+' es: '+resultado+'\n'+array);
    }
}

/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/
const ejercicio4 = function(){
    const numero = parseInt(prompt('Ingrese número.'));
    const parImpar = (numero%2==0)
    ? () => alert('Es par.')
    : () => alert('Es impar.');

    if (isNaN(numero)){
        alert('No es un número.');
    } else {
        parImpar();
    }
}

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
const ejercicio5 = function(){
    const cadena = prompt('Ingrese cadena de texto.');
    const toCase = function(cadena){
        if (cadena === cadena.toUpperCase()){
            return alert('Contiene solo mayúsculas.');
        }
        else if(cadena === cadena.toLowerCase()){
            return alert('Contiene solo minúsculas.');
        }
        else{
            return alert('Contiene mayúsculas y minúsculas.');
        }
    }
    toCase(cadena);
}

/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
Nota: la fórmula del perímetro  es p = 2*(a + b).*/
const ejercicio6 = function(){
    let perimetro = 0;
    const ladoa = parseInt(prompt('Ingrese valor del lado A del rectángulo.'));
    const ladob = parseInt(prompt('Ingrese valor del lado B del rectángulo.'));

    const operacion = function(ladoa, ladob){
        perimetro = 2*(ladoa+ladob);
        alert('El périmetro del rectángulo '+ladoa+'x'+ladob+' es: '+perimetro+'.');
    }

    if(isNaN(ladoa) || isNaN(ladob)){
        alert('No ingresaste número/s.');
    }
    else{
        operacion(ladoa,ladob);
    }
}

/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/
const ejercicio7 = function(){
    let numero = parseInt(prompt('Ingrese número.'));
    let resultado='';

   const tabla = function(){
        for(let i=1; i<=10 ;i++){;
            resultado =resultado.concat(numero,'x',i,'=',numero*i,'\n');
        }
        alert(resultado);
    }
    if(isNaN(numero)){
        alert('No ingresaste número/s.');
    }
    else{
        tabla();
    }
}