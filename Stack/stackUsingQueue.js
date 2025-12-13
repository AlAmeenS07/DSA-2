

// class Stack {
//     constructor(){
//         this.queue1 = []
//         this.queue2 = []
//     }

//     isEmpty(){
//         return this.queue1.length == 0
//     }

//     push(value){
//         this.queue1.push(value)
//     }

//     pop(){
//         for(let i=0; i<this.queue1.length; i++){
//             this.queue2.push(this.queue1.shift())
//         }
//         let val = this.queue1.shift()

//         let temp = this.queue1
//         this.queue1 = this.queue2
//         this.queue2 = temp
//         return val
//     }

//     peek(){
//         for(let i=0; i<this.queue1.length; i++){
//             this.queue2.push(this.queue1.shift())
//         }
//         console.log(this.queue1)
//         let val = this.queue1[0]
//         this.queue2.push(this.queue1.shift())

//         let temp = this.queue1
//         this.queue1 = this.queue2
//         this.queue2 = temp

//         return val
//     }

//     print(){
//         return this.queue1.toString()
//     }

// }

// const stack1 = new Stack()


// stack1.push(10)
// stack1.push(20)
// stack1.push(30)

// console.log(stack1)
// console.log(stack1.peek())
// console.log(stack1)
// console.log(stack1.pop())
// console.log(stack1)



// stack using 1 queue




class Stack {
    constructor(){
        this.queue1 = []
    }

    isEmpty(){
        return this.queue1.length == 0
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        let n = this.queue1.length
        for(let i=0; i<n; i++){
            this.queue1.push(this.queue1.shift())
        }
        console.log(this.queue1)
        let val = this.queue1.shift()
        return val
    }

    peek(){
        let n = this.queue1.length
        for(let i=0; i<n; i++){
            this.queue1.push(this.queue1.shift())
        }
        console.log(this.queue1)
        let val = this.queue1[0]
        this.queue1.push(this.queue1.shift())

        return val
    }

    print(){
        return this.queue1.toString()
    }

}

const stack1 = new Stack()


stack1.push(10)
stack1.push(20)
stack1.push(30)

console.log(stack1)
console.log(stack1.peek())
console.log(stack1)
console.log(stack1.pop())
console.log(stack1)
