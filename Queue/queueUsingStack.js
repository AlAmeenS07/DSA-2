

class Queue {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack2.length == 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length == 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length - 1]
    }

    isEmpty(){
        return this.stack1.length == 0 && this.stack2.length == 0
    }
}


const queue1 = new Queue()


queue1.enqueue(10)
queue1.enqueue(20)
queue1.enqueue(30)
console.log(queue1)
console.log(queue1.dequeue())
console.log(queue1)
queue1.enqueue(40)
console.log(queue1)
console.log(queue1.peek())
