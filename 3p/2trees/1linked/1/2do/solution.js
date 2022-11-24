

//o2 hijos de -2 y 7

function preorder(n){
  //primero imprime, y despues busca left and right
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
function Node(o){
    this.d=o       //object<->data
    this.l=null    //left
    this.r=null    //right
}



let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('*')

let q1 = new Node(-2)
let q2 = new Node(7)


p.l = o1
p.r = o2

o2.l = q1
o2.r = q2


preorder(p)