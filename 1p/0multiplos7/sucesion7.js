//imprime la sucesión de los múltiplos de 7 en el rango [200-300]
console.log("Sucesión de los multiplos de 7:")
var a = 200
var b = 300

while (a <= b){
  if (a % 7 === 0){
    console.log(a)
  }
  a++
}