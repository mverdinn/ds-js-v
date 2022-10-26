console.time('Tiempo: ')
class Cola {
    constructor() {
      this.cola = []
    }
    enqueue(element) {
      this.cola.push(element)
      return this.cola
    }
  
    dequeue(){
      return this.cola.shift()
    }
    front(){
      return this.cola[0]
    }
  
    size(){
      return this.cola.length
    }
  
    print(){
      return this.cola
    }
  
  }
  
  let cola1 = new Cola()
  let cola2 = new Cola()
  let numerosRandoms = 1000    //cambia
  let pasos = 0
    for (let i = 0; i < numerosRandoms; i++) {
        let numero = Math.floor(Math.random() * numerosRandoms)
        let frontCola1
        let frontCola2
        let aux = 0
      
     
    while (aux == 0){
            if (cola1.empty == true){
              cola1.enqueue(numero)
            pasos++
            }
             else {
               if (numero >= cola1.front()){
                frontCola1 = cola1.front()
               cola2.enqueue(frontCola1)
                 pasos++
                 cola1.dequeue()
               pasos++
               }
               
               else {
               cola2.enqueue(numero)
                 pasos++
                 if (cola1.size() > 0) {
                 while (cola1.size() > 0) {
                    frontCola1 = cola1.front()
                 cola2.enqueue(frontCola1)
                   pasos++
                   cola1.dequeue()
                 pasos++
              }
                 pasos++
            } 
                 aux++
               }
             }
           }
         
             if (cola2.size() > 0){
             while (cola2.size() > 0){
                frontCola2 = cola2.front()
               cola1.enqueue(frontCola2)
               pasos++
             cola2.dequeue()
             pasos++
              }
             pasos++
            } 
  
      }
      console.log(cola1.print())
      console.timeEnd('Tiempo: ')
      console.log('Número de pasos:' ,+pasos)