
console.time('Tiempo: ')

class Pila {
    constructor() {
        this.pila = []
    }
    push(element) {
        this.pila.push(element)
        return this.pila
    }
    pop() {
        return this.pila.pop()
    }
    peek() {
        return this.pila[this.pila.length - 1]
    }
   
    print() {
        console.log(this.pila)
    }
    size() {
        return this.pila.length
    }
   
}
let pila1 = new Pila()
let pila2 = new Pila()
let pasos = 0
let numbers = 100  //cambia
for (let i = 0; i < numbers; i++) {
    let number = Math.floor(Math.random() * numbers)
    let peekPila1
    let peekPila2
    let auxuliar = 0

    while (auxuliar == 0) {
        if (pila1.isEmpty == true) {
            pila1.push(number)
            pasos++
        }
        else {
            if (number <= pila1.peek()) {
                peekPila1 = pila1.peek()
                pila2.push(peekPila1)
                pasos++
                pila1.pop()
                pasos++
            } else {
                pila1.push(number)
                pasos++
                auxuliar++
            }
        }
    }
    if (pila2.size() > 0) {
        while (pila2.size() > 0) {
            peekPila2 = pila2.peek()
            pila1.push(peekPila2)
            pasos++
            pila2.pop()
            pasos++
        }
        pasos++
    }
}

pila1.print()
 console.timeEnd('Tiempo: ')
console.log('Número de pasos:' ,+pasos)