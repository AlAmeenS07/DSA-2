

class Stack {
    constructor(){
        this.stack = []
    }

    getSize(){
        return this.stack.length
    }

    isEmpty(){
        return this.stack.length == 0
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        if(this.stack.length == 0){
            return null
        }
        return this.stack[this.stack.length - 1]
    }
}

const stack1 = new Stack()


stack1.push(10)
stack1.push(20)
stack1.push(30)

stack1.pop()

console.log(stack1.peek())

console.log(stack1)