/*
  Ejercicio 4 - Switch: Color por inicial

  Declara una variable "inicial" con la letra inicial de un color en ingles
  (en mayuscula). Usando switch, muestra el nombre del color en español:
  - "R" → Rojo   (Red)
  - "G" → Verde  (Green)
  - "B" → Azul   (Blue)
  - "Y" → Amarillo (Yellow)
  - "W" → Blanco (White)
  - "K" → Negro  (Black)
  Si la inicial no corresponde a ninguno de estos colores,
  muestra: "Color no registrado."
*/

let color = "Y"

switch (color) {
   case "R":
      console.log(" El color es Rojo");
      break;
   case "G":
      console.log("El color es Verde");
      break;
   case "B":
      console.log("El color es Azul");
      break;
   case "Y":
      console.log("El color es Amarillo");
      break;
   case "W":
      console.log("El color es Blanco");
      break;
   case "K":
      console.log("El color es Negro");
      break;
   default:
      console.log("Color no registrado.");
}