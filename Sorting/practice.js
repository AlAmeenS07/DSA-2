
// 1️⃣ Sort an array of numbers
// Input: [3, 1, 4, 2]
// Output: [1, 2, 3, 4]


// bubble Sort

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log("Bubble Sort : " , bubbleSort([3, 1, 4, 2]))


// selection sort

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

console.log("Selection Sort : " , selectionSort([3, 1, 4, 2]))


// insertion Sort

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let val = arr[i]
        let j = i-1
        while(arr[j] > val){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = val
    }
    return arr
}

console.log("Insertion Sort : " , insertionSort([3, 1, 4, 2]))
console.log("Insertion Sort : " , insertionSort([-6 , 20 , 8 , -2 , 4]))


// quick sort

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else if(arr[i] > pivot){
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}

console.log("Quick Sort : " , quickSort([3, 1, 4, 2]))
console.log("Quick Sort : " , quickSort([-6 , 20 , 8 , -2 , 4]))


// merge sort

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0,mid)) , mergeSort(arr.slice(mid)))
}

function merge(left , right){
    let res = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            res.push(left.shift())
        }
        else{
            res.push(right.shift())
        }
    }
    return [...res , ...left , ...right]
}

console.log("Merge Sort : " , mergeSort([-6 , 20 , 8 , -2 , 4]))



// Linked List Sort



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    getHead() {
        return this.head
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
        }
        else {
            let current = this.head
            let listValue = []
            while (current) {
                listValue.push(current.value)
                current = current.next
            }
            return listValue
        }
    }

    sort(){
        function mergeSort(head){
            if(!head || !head.next){
                return head
            }
            let slow = head , fast = head , prev = null
            while(fast && fast.next){
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
            prev.next = null
            let left = mergeSort(head)
            let right = mergeSort(slow)
            return merge(left , right)
        }

        function merge(left , right){
            let dummy = {value : -1 , next : null}
            let tail = dummy
            while(left && right){
                if(left.value < right.value){
                    tail.next = left
                    left = left.next
                }
                else{
                    tail.next = right
                    right = right.next
                }
                tail = tail.next
            }
            tail.next = left || right
            return dummy.next
        }
        this.head = mergeSort(this.head)
    }
}

const list = new LinkedList()

list.prepend(2)
list.prepend(20)
list.prepend(30)
list.prepend(10)
list.prepend(89)

console.log(list.print())
list.sort()
console.log(list.print())