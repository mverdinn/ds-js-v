//imprime el número de múltiplos de 7 en el rango [200-300] (¿cuantos?)
console.log("Cantidad de multiplos del 7 entre 200-300:")
var a = 200
var b = 300
var c=0 //pasos

while (a <= b){
  if (a % 7 === 0){
    //console.log(a);
     c++
  }
  a++
  
}
console.log("Son ", c, "multiplos")