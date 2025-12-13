

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class StackList {
    constructor() {
        this.head = null
        this.size = 0
    }

    push(value) {
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

    pop() {
        if (this.size == 0) {
            return null
        }
        else if (this.size == 1) {
            this.head = null
            this.size--
            return;
        }
        else {
            let curr = this.head
            let prev = null
            while (curr.next) {
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
        }
        this.size--
    }

    peek() {
        if (this.size == 0) {
            return null
        }
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        return curr
    }

    isEmpty() {
        return thi.ssiz === 0
    }

}

const listStaack = new StackList()
listStaack.push(10)
listStaack.push(20)
listStaack.push(30)
console.log(listStaack)
listStaack.pop()
console.log(listStaack)
console.log(listStaack.peek())