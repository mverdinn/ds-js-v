//imprime los 11 primeros elementos de la sucesión de Fibonacci
console.log("11 primeros elementos de la sucesión de Fibonacci:")

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
for (var i = 2; i < 11; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
}
console.log(fibonacci)