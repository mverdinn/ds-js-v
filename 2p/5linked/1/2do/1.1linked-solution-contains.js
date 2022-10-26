
class Node {
    constructor(data) {
      this.data = data;
      this.next = null
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.currentSize = 0
    }
  
    append(data) {
      const node = new Node(data)
  
      if (this.head === null) {
        this.head = node
      } else {
        let actual = this.head
        while (actual.next) {
          actual = actual.next
        }
        actual.next = node
      }
  
      this.currentSize++
    }
  
    print() {
      if (this.head === null) {
        return null
      }
  
      let actual = this.head
      while (actual) {
        console.log(actual.data)
        actual = actual.next
      }
  
    }

    getTail() {
      if (this.head === null) {
        return null
      }
      let actual = this.head
      while (actual.next) {
        actual = actual.next
      }
      return actual.data
    }
    contains(data) {
        let actual = this.head
        while (actual) {
          if (actual.data == data) {
            return true
          }
          actual = actual.next
        }
       return false
      }
  
  }
  
  let listaEnlazada = new LinkedList()
  
  listaEnlazada.append(5)
  listaEnlazada.append(2)
  listaEnlazada.append(8)
  listaEnlazada.print()
  console.log('El tail es ' + listaEnlazada.getTail())
  console.log(listaEnlazada.contains(2))
