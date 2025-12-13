

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
        this.table[hashKey] = value
    }

    get(key){
        let hashKey = this.hash(key)
        return this.table[hashKey]
    }

    remove(key){
        let hashKey = this.hash(key)
        this.table[hashKey] = undefined
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
table.set("age" , 18)

console.log(table)

console.log(table.get("age"))
table.display()