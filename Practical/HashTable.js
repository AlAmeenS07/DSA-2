
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

lpht.print()