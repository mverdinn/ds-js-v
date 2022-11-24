
//1.Fibonacci
function fibonacci(n) {
    if (n <= 2){
        return 1
    }         
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log("Fibonacci: ");
console.log(fibonacci(5))


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