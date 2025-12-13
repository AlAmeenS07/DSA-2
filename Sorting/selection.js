

// [4,2,6,2,5,1,9]  i=0 , find min and swap with i 
// [1,2,6,2,5,4,9]  i=1 , find the min and swap with i
// [1,2,6,2,5,4,9]  i=2 , find min and swap with i
// [1,2,2,6,5,4,9]  i=3 , 
// .
// .
// .
// [1,2,2,4,5,6,9] == sorted


function selection(arr){
    for(let i=0; i<arr.length-1; i++){
        let min = i;
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


console.log(selection([4,2,5,1,6,7,-8,-2,-22,6,8]))
 

//  T - O(n^2)  S - O(1)
