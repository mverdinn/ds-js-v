//imprime los 11 primeros números primos
console.log("11 primeros números primos")
function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false
   return numero > 1
}  
for (let x=0;x<32;x++) {
    if (esPrimo(x))
        console.log(x )
}
