

class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        return this.queue.shift()
    }

    peek(){
        if(this.queue.length == 0){
            return null
        }
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length == 0
    }

    getSize(){
        return this.queue.length
    }
}

const queue1 = new Queue()

queue1.enqueue(10)
queue1.enqueue(20)
queue1.enqueue(30)

console.log(queue1.dequeue())
console.log(queue1)
console.log(queue1.peek())