/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */



function inorder(n){
  //
  if (n!==null){
    //console.log(n.d)
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}

function posorder(n){
  //
  if (n!==null){
    posorder(n.l)
    //console.log(n.d)
    posorder(n.r)
    console.log(n.d)
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


inorder(p)
posorder(p)