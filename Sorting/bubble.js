

// Bubble Sorting

// [-6, 20, 8, -2, 4]

// [-6, 8, 20, -2, 4]
// [-6, 8, -2, 20, 4]
// [-6, 8, -2, 4, 20]

// End of array , if swapped ? repeaat the proess

// [-6, -2, 8, 4, 20]
// [-6, -2, 4, 8, 20]

// End of array if not swapped , sorted success



// function bubble(arr){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

function bubble(arr){
    for(let i=0; i<arr.length-1; i++){
        let isSwapped = false
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSwapped = true
            }
        }
        if(!isSwapped) break;
    }
    return arr
}

console.log(bubble([1,2,3,4,5,6]))    

//  T - O(n^2)  S - O(1)