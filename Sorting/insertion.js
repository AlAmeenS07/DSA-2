
//  Insertion Sort

// 1. Assume first element is already sorted !
// 2. 

// [-6 , 20 , 8 , -2 , 4]  -  NTI = 20   SE = -6   if -6 > 20 ? No place 20 in right of -6
// [-6 , 20 , 8 , -2 , 4]  -  NTI = 8    SE = 20   if 20 > 8 Yes , Shift 20 to right 
// [-6 , 20 , 20 , -2 , 4] -  NTI = 8    SE = -6   if -6 > 8? no , place 8 to the right of -6
// [-6 , 8 , 20 , -2 , 4]  -  NTI = -2   SE = 20   20 > -2  shift 20 to right
// [-6 , 8 , 20 , 20 , 4]  -  NTI = -2   SE = 8    8 > -2  shift 8 to right
// [-6 , 8 , 8 , 20 , 4]   -  NTI = -2   SE = -6   -6 > -2 No so place -2 to right of -6
// [-6 , -2 , 8 , 20 , 4]   -  NTI = 4    SE = 20   20 > 4 , shift 20 right
// [-6 , -2 , 8 , 20 , 20]  -  NTI = 4    SE = 8    8 > 4  , shift 8 to right
// [-6 , -2 , 8 , 8 , 20]   -  NTI = 4    SE = -2   -2 > 4 No , so place 4 to right of -2 
// [-6 , -2 , 4 , 8 , 20]   =  SORTED


function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        prev = i - 1
        while (arr[prev] > curr) {
            arr[prev + 1] = arr[prev]
            prev--
        }
        arr[prev+1] = curr
    }
    return arr
}

console.log(insertion([3,4,5,7,1,2]))   // T - O(n^2)  S - O(1)