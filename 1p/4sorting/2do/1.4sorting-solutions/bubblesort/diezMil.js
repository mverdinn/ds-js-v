console.time('Tiempo ')
var array = [];
 for(i = 0; i < 10000; i++){
 random = Math.floor(Math.random() * (10000-1)+1);
 array.push(random);
 }
console.log("Valores aleatorios: ");
console.log(array);

var pasos = 0;
function bubbleSort(arr) {
    var length = arr.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length  - 1); j++) { 
                   if(arr[j] > arr[j+1]) {
                           var tmp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = tmp;
                     pasos++;
            }
        }        
    }
}

console.log("Valores ordenados con Bubble Sort: ");
bubbleSort(array);
console.log(array);
console.log('Numero de pasos: ',pasos);
console.timeEnd('Tiempo ')