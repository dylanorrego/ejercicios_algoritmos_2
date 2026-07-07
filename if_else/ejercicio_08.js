/*
  Ejercicio 8 - If / Else: Indice de Masa Corporal (IMC)

  El IMC se calcula con la formula: IMC = peso (kg) / (altura (m) * altura (m))
  La clasificacion segun la OMS es:
  - IMC menor a 18.5:          "Bajo peso"
  - IMC entre 18.5 y 24.9:    "Peso normal"
  - IMC entre 25.0 y 29.9:    "Sobrepeso"
  - IMC mayor o igual a 30.0: "Obesidad"

  Declara las variables "peso" (en kilogramos) y "altura" (en metros).
  Calcula el IMC, redondea el resultado a dos decimales
  e imprime la clasificacion correspondiente.
*/
var peso = 70; // en kilogramos
var altura = 1.75; // en metros
var imc = peso / (altura * altura);
imc = Math.round(imc * 100) / 100; // Redondear a dos decimales

if (imc < 18.5) {
    console.log("Clasificación: Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Clasificación: Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Clasificación: Sobrepeso");
} else {
    console.log("Clasificación: Obesidad");
}