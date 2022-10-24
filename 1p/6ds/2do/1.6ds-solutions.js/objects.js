//agregar 10e3 pares (llave:valor) a un objeto

let obj = {}
let name = ""
for (i=0; i<10e3; i++) {
  name = "name"+(1+Math.floor(Math.random()*10e3))
 // obj = {name:name}
  obj[name]=name
//console.log(name) PREGUNTARRR
}
console.log(obj)
