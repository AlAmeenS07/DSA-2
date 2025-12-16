
// simple HashTable


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hashKey = 0
//         for(let i=0; i<key.length; i++){
//             hashKey += key.charCodeAt(i)
//         }
//         // console.log(hashKey % this.size)
//         return (hashKey % this.size)
//     }

//     set(key , value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }

//     print(){
//         for(let i=0; i<this.size; i++){
//             if(this.table[i]){
//                 console.log(this.table[i])
//             }
//         }
//     }
// }

// let ht1 = new HashTable(10)

// ht1.set("name" , "ameen")
// ht1.set("age" , 18)
// ht1.set("dob" , "kdjk")
// ht1.remove("dob")
// console.log(ht1.get("age"))
// ht1.print()
// console.log(ht1)



// Hash table seperate chaining


// class SeperateChainHashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hashKey = 0
//         for(let i=0; i<key.length; i++){
//             hashKey += key.charCodeAt(i)
//         }
//         return hashKey % this.size
//     }

//     set(key , value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key , value]]
//         }
//         else{
//             let sameKey = bucket.find(b => b[0] == key)
//             if(sameKey){
//                 sameKey[1] = value
//             }
//             else{
//                 bucket.push([key , value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             return "no value exist !"
//         }
//         else{
//             let sameKey = bucket.find(b => b[0] == key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//             else{
//                 return "no value exist !"
//             }
//         }
//     }

//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             return "no value exists !"
//         }
//         else{
//             let sameKey = bucket.find(b => b[0] == key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey) , 1)
//             }
//             else{
//                 return "no key exist !"
//             }
//         }
//     }

//     print(){
//         for(let i=0; i<this.size; i++){
//             if(this.table[i]){
//                 console.log(this.table[i])
//             }
//         }
//     }
// }

// let scht = new SeperateChainHashTable(10)

// scht.set("name" , "alameen")
// scht.set("age" , 18)
// scht.set("mane" , "main")

// console.log(scht.get("mane"))

// scht.remove("mane")

// scht.print()




class LinearProbingHashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }

    isEmpty(){
        return this.count == 0
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
        while(this.table[index] && this.table[index][0] !== "__DELETED__"){
            if(this.table[index][0] == key){
                this.table[index][1] = value
                return;
            }
            index = (index + 1) % this.size
        }
        this.table[index] = [key , value]
    }

    get(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] == key){
                return this.table[index][1]
            }
            index = (index + 1) % this.size
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] == key){
                this.table[index] = ["__DELETED__" , null]
                this.count--
                return
            }
            index = (index + 1) % this.size
        }
        return "No value Exist !"
    }

    print(){
        for(let i=0; i<this.size; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}

const lpht = new LinearProbingHashTable(20)

lpht.set("name" , "alameen")
lpht.set("age" , 18)
lpht.set("mane" , "al")

// lpht.print()


// quadatic probing


class QuadraticProbingHashTable {
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
        let ogIndex = this.hash(key)
        let index = ogIndex
        let k = 1
        while(this.table[index] && this.table[index][0] !== "__DELETED__"){
            if(this.table[index][0] == key){
                this.table[index][1] = value
                return;
            }
            index = (ogIndex + (k * k)) % this.size
            k++
        }
        this.table[index] = [key , value]
    }

    get(key){
        let ogIndex = this.hash(key)
        let index = ogIndex
        let k = 1
        while(this.table[index]){
            if(this.table[index][0] == key){
                return this.table[index][1]
            }
            index = (ogIndex + (k*k)) % this.size
            k++
        }
        return undefined
    }

    remove(key){
        let ogIndex = this.hash(key)
        let index = ogIndex
        let k = 1
        while(this.table[index]){
            if(this.table[index][0] == key){
                this.table[index] = ["__DELETED__" , null]
                return;
            }
            index = (ogIndex + (k * k)) % this.size
            k++
        }
        return "no key exist !"
    }

    print(){
        for(let i=0; i<this.size; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}

// let qpht = new QuadraticProbingHashTable(10)

// qpht.set("name" , "alameen")
// qpht.set("age" , 18)
// qpht.set("mane" , "main")

// qpht.print()

// console.log(qpht.remove("enam"))

// qpht.remove("name")

// console.log(qpht.get("mane"))



// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function findTarget(arr , target){
    let map = new QuadraticProbingHashTable(arr.length * 2)
    for(let i=0; i<arr.length; i++){
        let num = arr[i]
        let missing = target - num
        if(map.get(String(missing)) !== undefined){
            return[map.get(String(missing)) , i]
        }
        map.set(String(num) , i)
    }
    map.print()
    return "no target found !"
}

console.log(findTarget([2,7,11,15] , 13))