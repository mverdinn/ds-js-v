
//1.Fibonacci
let fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1
for (let i = 2; i < 5; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
}
console.log("Fibonacci: ")
console.log(fibonacci)






//2. Potencia
function power(n,m){
    if(m == 0){
        return 1
    }
    else{       
        return n * power(n, m - 1)
    }
}

console.log("Power: ");
console.log(power(2,3))


//3. Factorial
function factorial(n) {
    if(n<1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}


console.log("Factorial: ");
console.log(factorial(3))


