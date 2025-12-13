
// bubble sorting


function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let swapped = false
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
                swapped = true
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr
}


console.log("bubble sort : " , bubbleSort([4,3,1,6,8,2,9,0]))


// selection sort

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i
        let j = i+1
        while(j < arr.length){
            if(arr[j] < arr[min]){
                min = j
            }
            j++
        }
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }
    return arr
}

console.log("selection sort : " , selectionSort([4,3,1,6,8,2,9,0]))


function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let nti = arr[i]
        let j = i-1
        while(arr[j] > nti && j >= 0){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = nti
    }
    return arr
}

console.log("insertion sort : " , insertionSort([4,3,1,6,8,2,9,0]))


// quick sort

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left) , pivot , ...quickSort(right)]
}

console.log("quick sort : " , quickSort([4,3,1,6,8,2,9,0]))


// merge sort

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []
    let mid = Math.floor(arr.length / 2)
    for(let i=0; i<arr.length; i++){
        if(i < mid){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return merge(mergeSort(left) , mergeSort(right))
}

function merge(left , right){
    let sort = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sort.push(left[i])
            i++
        }
        else{
            sort.push(right[j])
            j++
        }
    }
    return [...sort , ...left.slice(i) , ...right.slice(j)]
}

console.log("merge sort : " , mergeSort("zxyab"))

console.log(merge([1,3,5], [2,4,6]))