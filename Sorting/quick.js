

// Quick Sort

// 1 . Select any element in array as pivot (first , last , middle , any element)
// 2. make you two array left and right
// 3. left array contains array elements less than pivot
// 4. right array contains elements grater than pivot
// 5. // 1 . Select any element in array as pivot (first , last , middle , any element)
      // 2. make you two array left and right
      // 3. left array contains array elements less than pivot of subarray
      // 4. right array contains elements grater than pivot of subarray
// 6. Do this process utill each elemnt becomes signle value
// 5. concat left + pivot + right == Sorted array

// [-6 , 20 , 8 , -2 , 4] 

//  left = [-6 , -2]        pivot - [4]       right = [8 , 20]

//  left  [-6] pivot - [-2] right []          left = [8] pivot = [20] right []

//  concart all single array = [-6 , -2 , 4 , 8 , 20]  = Sorted


function quick(arr){
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
    return [...quick(left) , pivot , ...quick(right)]
}

console.log(quick([5,2,9,3,6,1,8,7]))