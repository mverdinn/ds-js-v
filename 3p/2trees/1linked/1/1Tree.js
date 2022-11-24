//
// ES5 tree
// imports
// preorder
//



function Node(o){
    this.d=o       //object<->data
    this.l=null    //left
    this.r=null    //right
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)

p.l = o1
p.r = o2

preorder(p)


