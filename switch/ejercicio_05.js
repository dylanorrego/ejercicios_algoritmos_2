/*
  Ejercicio 5 - Switch: Estacion del año

  Declara una variable "mes" con un numero del 1 al 12.
  Usando switch con casos agrupados, determina la estacion del año
  correspondiente (para el hemisferio sur de Colombia / America del Sur):
  - Diciembre, Enero, Febrero (12, 1, 2):       "Verano"
  - Marzo, Abril, Mayo (3, 4, 5):               "Otono"
  - Junio, Julio, Agosto (6, 7, 8):             "Invierno"
  - Septiembre, Octubre, Noviembre (9, 10, 11): "Primavera"
  Imprime el mes y la estacion correspondiente.
*/

let mes = 7;
let estacion;

switch (mes) {
    case 12: 
    case 1:
    case 2:
        estacion = "Verano";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Otono";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Mes invalido";
}

console.log("El mes " + mes + " corresponde a la estacion: " + estacion);