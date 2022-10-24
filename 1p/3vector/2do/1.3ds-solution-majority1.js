//más de ⌊n/2⌋ veces, SINNNN ordenar (fuerza bruta) 
//5 valores del 0-4
console.log("Sin ordenar")
var array = []

let aleatorio;
 for(i = 0; i < 5; i++){
 aleatorio = Math.floor(Math.random() * 4)
 array.push(aleatorio)
 }
console.log(array)


const majorityElement = (array = []) => {
   const threshold = Math.floor(array.length / 2)
   const map = {}
   for (let i = 0; i < array.length; i++) {
      const value = array[i]
      map[value] = map[value] + 1 || 1
      if (map[value] > threshold)
         return value
   }
   return "No es majority"
}

console.log("Majority: " +majorityElement(array))