

class CircularQueue {
    constructor(size) {
        this.queue = new Array(size)
        this.size = size
        this.currentSize = 0
        this.front = -1
        this.rear = -1
    }

    isFull() {
        return this.currentSize == this.size
    }

    isEmpty() {
        return this.currentSize == 0
    }
    
    getSize(){
        return this.currentSize
    }

    enqueue(value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.size
            this.queue[this.rear] = value
            this.currentSize = this.currentSize + 1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
        return "queue is full !"
    }

    dequeue() {
        let item = null
        if (!this.isEmpty()) {
            item = this.queue[this.front]
            this.queue[this.front] = null
            this.front = (this.front + 1) % this.size
            this.currentSize = this.currentSize - 1
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
        }
        return item
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.front]
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        return this.queue.toString()
    }
}

const circularQ = new CircularQueue(5)


circularQ.enqueue(10)
circularQ.enqueue(20)
circularQ.enqueue(30)

console.log(circularQ.print())
console.log(circularQ.getSize())

console.log(circularQ.dequeue())
console.log(circularQ)