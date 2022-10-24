//imprime la sumatoria de los múltiplos de 7 en el rango [200-300]
console.log("Sumatoria de los multiplos de 7:")

var a = 200
var b = 300
var suma = 0

while (a <= b){
  if (a % 7 === 0){
    //console.log(a)
    suma = suma + a
  }
  a++
}
console.log(suma)