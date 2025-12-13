

// Merge sort 

// [-6 , 20 , 8 , -2 , 4] 

// 1. Divide array into subarrays which contains only one element each by middle element
// 2. Then take as left array and right array and push into new temp array in sorted order
// 3. like way do until left and right array becomes empty []
// 4. Sorted array


                // [-6 , 20 , 8 , -2 , 4] 

        // left [-6 , 20]      right [8 , -2 , 4]

//  left [-6]  right [20]           left [8]  right [-2 , 4]

                // [-6] [20] [8] [-2] [4]


// left , right = [-6] [20] = [-6 , 20]
                // [] [] = [-6 , 20]

// left , right = [-2] , [4] = [-2 , 4]
                // [] , [] = [-2 , 4]

// left , right = [-6 , 20] , [8]  =  [-6 , 8 , 20]
                // [] , []  =  [-6 , 8 , 20]

// left , right = [-6 , 8 , 20] , [-2 , 4] = [-6 , -2 , 4 , 8 , 20]

                // [] , [] = [-6 , -2 , 4 , 8 , 20]




// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let mid = arr.length / 2
//     return merge(mergeSort(arr.slice(0 , mid)) , mergeSort(arr.slice(mid)))
// }

// function merge(left , right){
//     let mergeArr = []
//     let i = 0
//     let j = 0
//     while (i < left.length && j < right.length) {
//         if(left[i] < right[j]){
//             mergeArr.push(left[i])
//             i++
//         }
//         else{
//             mergeArr.push(right[j])
//             j++
//         }
//     }
//     return [...mergeArr , ...left.slice(i) , ...right.slice(j)]
// }

// console.log(mergeSort([7,2,5,1]))






function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = arr.length / 2
    let left = []
    let right = []
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
    let mergeArr = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if(left[i] < right[j]){
            mergeArr.push(left[i])
            i++
        }
        else{
            mergeArr.push(right[j])
            j++
        }
    }
    return [...mergeArr , ...left.slice(i) , ...right.slice(j)]
}

console.log(mergeSort([7,2,5,1]))