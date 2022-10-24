//más de ⌊n/2⌋ veces, ordenados 
//5 valores del 0-4

console.log("Ordenados")
var array = []

let aleatorio
 for(i = 0; i < 5; i++){
 aleatorio = Math.floor(Math.random() * 4)
 array.push(aleatorio)
 }
console.log(array)



const majorityElement = (arr = []) => {
   const threshold = Math.floor(arr.length / 2)
   const map = {}
   for (let i = 0; i < arr.length; i++) {
      const value = array[i];
      map[value] = map[value] + 1 || 1
      if (map[value] > threshold)
         return value
   }
   return "No es majority"
}



function selectionSort(inputArr) { 
    let n = inputArr.length
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
              
            }
         }
         if (min != i) {
             let tmp = inputArr[i]
             inputArr[i] = inputArr[min]
             inputArr[min] = tmp    
        }
   }
    return inputArr
}


selectionSort(array)
console.log("Majority: " +majorityElement(array))