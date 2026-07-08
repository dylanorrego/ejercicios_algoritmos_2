/*
  Ejercicio 9 - Ternario: Saludo segun hora del dia

  Declara una variable "hora" con un valor entre 0 y 23 (formato 24 horas).
  Usando el operador ternario, asigna el saludo apropiado a la variable "saludo":
  - De 0 a 11:  "Buenos dias"
  - De 12 a 17: "Buenas tardes"
  - De 18 a 23: "Buenas noches"
  Imprime el saludo en consola.

  Pista: puedes encadenar dos operadores ternarios para tres opciones.
*/

let hora = 15;
let saludo = (hora >= 0 && hora <= 11) 
? "Buenos dias"
: (hora >= 12 && hora <= 17)
? "Buenas tardes"
: (hora >= 18 && hora <= 23)
? "Buenas noches"
: "Hora invalida";

console.log(saludo);