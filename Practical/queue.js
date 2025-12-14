
// Implement a queue using array (circular queue).

class CircularQueue {
    constructor(size) {
        this.queue = new Array(size)
        this.size = size
        this.count = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty() {
        return this.count === 0
    }

    isFull() {
        return this.count === this.size
    }

    enqueue(value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.size
            this.queue[this.rear] = value
            this.count++
            if (this.front == -1) {
                this.front = this.rear
            }
        }
        else {
            return "queue is full !"
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.queue[this.front] = undefined
            this.front = (this.front + 1) % this.size
            this.count--
            if (this.isEmpty()) {
                this.front = -1
                this.rear = -1
            }
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.queue[this.front]
        }
    }
}


// Implement a queue using linked list.


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LLQueue {
    constructor() {
        this.head = null
        this.size = 0
    }

    enqueue(value) {
        const node = new Node(value)
        if (this.size == 0) {
            this.head = node
        }
        else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    dequeue() {
        let val;
        if (!this.size) {
            return null
        }
        else {
            val = this.head
            this.head = val.next
        }
        this.size--
        return val.value
    }

    peek() {
        if (!this.size) {
            return null
        }
        else {
            return this.head.value
        }
    }

}


// queue using stack


class QueueStack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    isEmpty(){
        return this.stack1.length == 0 && this.stack2.length == 0
    }

    enqueue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        if (this.stack2.length == 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek() {
        if (this.stack2.length == 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length - 1]
    }

}

