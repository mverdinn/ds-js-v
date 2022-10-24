var array = []
let pasos = 0

let aleatorio
for(i = 0; i < 10e4; i++){
aleatorio = Math.floor(Math.random() * 10e4)
array.push(aleatorio)
}
console.log("Valores ordenados: ")
console.log(array.sort(up))

function up(a,b){return a-b}

binarySearch = function(item){
array.sort(up) 
var low = 0, 
high = array.length - 1, 
mid, element
  
while (low <= high){ 
var mid = Math.floor((low + high) / 2)
element = array[mid]

if (element < item) { 
low = mid + 1
} else if (element > item) { 

high = mid - 1
} else {
return mid
return -1
} 
  pasos++
}
}

console.log("Posición: ")
console.log(binarySearch(71))

console.log("Pasos: ", pasos)