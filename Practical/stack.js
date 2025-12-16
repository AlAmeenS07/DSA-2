
// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     push(value) {
//         this.stack.push(value)
//     }

//     pop() {
//         this.stack.pop()
//     }

//     peek() {
//         return this.stack[this.stack.length - 1]
//     }
// }


// // reverse a string using stack

// function reverseString(str) {
//     let s1 = new Stack()
//     for (let v of str) {
//         s1.push(v)
//     }
//     let rev = ""
//     while (s1.stack.length) {
//         rev += s1.stack.pop()
//     }
//     return rev
// }

// console.log(reverseString("hello"))


// // implement stack using queue

// class QueueStack {
//     constructor() {
//         this.queueStack = []
//     }

//     isEmpty() {
//         return this.queueStack.length == 0
//     }

//     push(value) {
//         this.queueStack.push(value)
//     }

//     pop() {
//         let n = this.queueStack.length
//         for (let i = 0; i < n - 1; i++) {
//             this.queueStack.push(this.queueStack.shift())
//         }
//         let val = this.queueStack.shift()
//         return val
//     }

//     peek() {
//         let n = this.queueStack.length
//         for (let i = 0; i < n - 1; i++) {
//             this.queueStack.push(this.queueStack.shift())
//         }
//         let val = this.queueStack[0]
//         this.queueStack.push(this.queueStack.shift())
//         return val
//     }

//     print() {
//         return this.queueStack.toString()
//     }
// }

// let qStact = new QueueStack()

// qStact.push(10)
// qStact.push(20)
// qStact.push(30)
// qStact.pop()
// console.log(qStact.peek())


// Stack with LL


// class Node {    
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LLStack {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.size == 0){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.size){
//             let val = this.head
//             this.head = val.next
//             this.size--
//             return val.value
//         }
//         return "stack is empty"
//     }

//     peek(){
//         if(this.size){
//             return this.head.value
//         }
//         return "stack is empty !"
//     }

//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.value)
//             curr = curr.next
//         }
//     }
// }

// let llStack = new LLStack()

// llStack.push(10)
// llStack.push(20)
// llStack.push(30)
// // llStack.print()
// console.log(llStack.peek())
// console.log(llStack.pop())
// llStack.print()


//  Sort a stack using a temporary stack

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    print(){
        return this.stack.toString()
    }

    sort(){
        function sorting(stack){
            if(stack.length <= 1){
                return stack
            }
            let leftStack = []
            let rightStack = []
            let mid = Math.floor(stack.length / 2)
            while(stack.length){
                
            }
        }
        return sorting(this.stack)
    }
}


let sortStack = new Stack()

sortStack.push(9)
sortStack.push(4)
sortStack.push(1)
sortStack.push(6)
sortStack.push(2)

console.log(sortStack.print())