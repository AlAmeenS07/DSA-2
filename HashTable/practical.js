
class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let hashKey = 0
        for(let i=0; i<key.length; i++){
            hashKey += key.charCodeAt(i)
        }
        return hashKey % this.size
    }

    set(key , value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key , value]]
        }
        else{
            let sameKey = bucket.find(b => b[0] == key)
            if(sameKey){
                sameKey[1] = value
            }
            else{
                bucket.push([key , value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return undefined
        }
        else{
            let sameKey = bucket.find(b => b[0] == key)
            if(sameKey){
                return sameKey[1]
            }
            else{
                return undefined
            }
        }
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            return "Value doesn't exist !"
        }
        else{
            let sameKey = bucket.find(b => b[0] == key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey) , 1)
            }
            else{
                return "Value of key doesn't exists !"
            }
        }
    }

    print(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}



// 1. Find the first non-repeating character in a string 4

// Input: "leetcode" 
// Output: "l"


function firstNonRepeat(str){
    const table = new HashTable(25)
    for(let i=0; i<str.length; i++){
        if(table.get(str[i])){
            table.set(str[i] , table.get(str[i])+1)
        }
        else{
            table.set(str[i] , 1)
        }
    }
    table.print()
    for(let i=0; i<str.length; i++){
        if(table.get(str[i]) == 1){
            return str[i]
        }
    }
}

// console.log(firstNonRepeat("leetcode"))



// 2. Check if two strings are anagrams 

// Input: "listen", "silent" 
// Output: true


function twoStringAnagram(str1 , str2){
    if(str1.length != str2.length) return false
    const table1 = new HashTable(25)
    for(let i=0; i<str1.length; i++){
        if(table1.get(str1[i])){
            table1.set(str1[i] , table1.get(str1[i])+1)
        }
        else{
            table1.set(str1[i] , 1)
        }
    }
    const table2 = new HashTable(25)
    for(let i=0; i<str2.length; i++){
        if(table2.get(str2[i])){
            table2.set(str2[i] , table2.get(str2[i])+1)
        }
        else{
            table2.set(str2[i] , 1)
        }
    }
    table1.print()
    console.log("next")
    table2.print()
    
    for (let i = 0; i < str1.length; i++) {
        if(table1.get(str1[i]) !== table2.get(str1[i])){
            return false
        }   
    }
    return true
}

console.log(twoStringAnagram("listen" , "silent"))



// 3. Count frequency of each element in an array 

// Input: [1,2,2,3,3,3] 
// Output: {1:1, 2:2, 3:3}


function countFrequency(arr){
    let table = new HashTable(arr.length * 2)
    for(let i=0; i<arr.length; i++){
        if(table.get(arr[i])){
            table.set(arr[i] , table.get(arr[i])+1)
        }
        else{
            table.set(arr[i] , 1)
        }
    }

    let map = {}
    for(let i=0; i<arr.length; i++){
        map[arr[i]] = table.get(arr[i])
    }
    return map
}

console.log(countFrequency([1,2,2,3,3,3]))