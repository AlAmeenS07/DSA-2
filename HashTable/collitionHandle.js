

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let keyHash = 0
        for(let i=0; i<key.length; i++){
            keyHash += key.charCodeAt(i)
        }
        return keyHash % this.size
    }

    set(key , value){
        let hashKey = this.hash(key)
        let bucket = this.table[hashKey]
        if(!bucket){
            this.table[hashKey] = [[key , value]]
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
        let hashKey = this.hash(key)
        let bucket = this.table[hashKey]
        if(bucket){
            let sameKey = bucket.find(b => b[0] == key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        let hashKey = this.hash(key)
        let bucket = this.table[hashKey]
        if(!bucket){
            return undefined
        }
        let exist = bucket.find(b => b[0] == key)
        if(!exist){
            return undefined
        }
        bucket.splice(bucket.indexOf(exist) , 1)
        if(bucket.length == 0){
            this.table[hashKey] = undefined
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}

const table = new HashTable(50)

table.set("name" , "alameen")
table.set("mane" , "ameen")
table.set("age" , 18)

console.log(table)
table.display()