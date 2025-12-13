

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedQueue {
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
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    dequeue(){
        let curr = this.head
        let prev = this.head
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.size--
    }

    peek(){
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        return curr
    }

    isEmpty(){
        return this.size == 0
    }

}

const queue = new LinkedQueue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue)
console.log(queue.peek())
queue.dequeue()
console.log(queue)