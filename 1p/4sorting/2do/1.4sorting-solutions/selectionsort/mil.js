console.time('Tiempo ')
var array = [];
let random;
 for(i = 0; i < 1000; i++){
 random = Math.floor(Math.random() * (1000-1)+1);
 array.push(random);
 }

var pasos = 0
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
              
            }
        
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        pasos++ 
         }
      
   }
    return inputArr;
}


console.log("Valores aleatorios: ");
console.log(array);
console.log("Valores ordenados con Selection Sort: ");
selectionSort(array);
console.log(array);
console.log('Numero de pasos: ',pasos);
console.timeEnd('Tiempo ')