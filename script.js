/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.*/


//Se crea una variable para ingresar el valor de la temperatura
const celsius = prompt("Por favor, ingresa la temperatura en grados Celsius: ");

//Se crea una función con un If para convertir los Celsius a Fahrenheit y Kelvin, siempre que el valor sea un número
function convertir(){     
    if(Number.isFinite(parseFloat(celsius))){
        let fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        let kelvin =  parseFloat(celsius) + 273.15;
    alert("La temperatura en grados Fahrenheit es: " + fahrenheit);
    alert("La temperatura en grados Kelvin es: " + kelvin);   
    } else {
    alert("Número incorrecto. Por favor intente de nuevo");
        return;
    } 

}
//Se debe llaamr la funcion para que se visualice en pantalla
convertir();





