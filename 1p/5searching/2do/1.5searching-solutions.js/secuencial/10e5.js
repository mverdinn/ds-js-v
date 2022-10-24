var array = []
var pasos = 0

let aleatorio;
 for(i = 0; i < 10e5; i++){
 aleatorio = Math.floor(Math.random() * 10e5)
 array.push(aleatorio)
 }
console.log("Valores aleatorios: ")
console.log(array);

function sequentialSearch(element, array){
  for (var i in array){
    if (array[i] == element) return i
    pasos++
  }
  return -1;
}



//console.log(array);
var a = sequentialSearch("7",array)
console.log(a)
console.log("Pasos: "+pasos)