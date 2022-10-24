let obj = {}
let name = ""
for (i=0; i<10e3; i++) {
  name = "name"+(1+Math.floor(Math.random()*10e3))
 // obj = {name:name}
  obj[name]=name
//console.log(name) 
}
console.log("Objeto desordenado: ")
console.log(obj)



var objk = Object.keys(obj)

function up(a,b){ //Acomoda  el arreglo
  return b-a
}
// console.log(objk.sort(up))

console.log("Llaves ordenadas: ")

console.log(objk.sort((p,q)=>p < q ? - 1 : p > q ? 1 : 0))


console.log("Nuevo objeto: ")
var obj2 = objk.map(function(elemento){
  var dividir = elemento.split("|")
  return {name: dividir[0]}
})

console.log(obj2);