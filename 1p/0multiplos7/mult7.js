//imprime la multiplicatoria de los múltiplos de 7 en el rango [200-300]
console.log("Multiplicatoria de los múltiplos de 7:")
var a = 200
var b = 300
var multiplicacion = 1

while (a <= b){
  if (a % 7 === 0){
    //console.log(a);
     multiplicacion = multiplicacion * a;
  }
  a++
}
console.log(multiplicacion);