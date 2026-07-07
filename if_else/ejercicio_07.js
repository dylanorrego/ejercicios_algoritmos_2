/*
  Ejercicio 7 - If / Else: Precio de entrada al cine

  Un cine cobra las entradas segun la edad del espectador:
  - Menores de 5 años:        entrada GRATIS
  - De 5 a 11 años (niño):   $8.000
  - De 12 a 64 años (adulto): $15.000
  - 65 años o mas (senior):   $9.000

  Declara una variable "edad" con la edad del espectador.
  Usando if / else if / else, calcula e imprime el precio de la entrada.
*/
let edad = 30;

if (edad < 5) {
    console.log("La entrada es gratuita.");
} else if (edad >= 5 && edad <= 11) {
    console.log("El precio de la entrada es $8.000.");
} else if (edad >= 12 && edad <= 64) {
    console.log("El precio de la entrada es $15.000.");
} else {
    console.log("El precio de la entrada es $9.000.");
}