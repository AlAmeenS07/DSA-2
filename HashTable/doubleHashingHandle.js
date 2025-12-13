

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
    }

    hash1(key){
        let hashKey = 0
        for(let i=0; i<key.length; i++){
            hashKey += key.charCodeAt(i)
        }
        return hashKey % this.size
    }

    hash2(key){
        let hashKey = 0
        for(let i=0; i<key.length; i++){
            hashKey += key.charCodeAt(i)
        }
        return 7 - (hashKey % 7)
    }

    set(key , value){
        let index1 = this.hash1(key)
        let index2 = this.hash2(key)

        let index = index1
        let k = 1

        while(this.table[index] && this.table[index][0] !== "__DELETED__"){
            if(this.table[index][0] == key){
                this.table[index][1] = value
                return
            }

            index = (index1 + (k * index2)) % this.size
            k++
        }

        this.table[index] = [key , value]
        this.count++
    }

    get(key){
        let index1 = this.hash1(key)
        let index2 = this.hash2(key)

        let index = index1
        let k = 1

        if(!this.table[index]){
            return null
        }

        while(this.table[index]){
            if(this.table[index][0] == key){
                return this.table[index][1]
            }
            index = (index1 + (k * index2)) % this.size
            k++
        }
        return undefined
    }

    remove(key){
        let index1 = this.hash1(key)
        let index2 = this.hash2(key)

        let index = index1
        let k = 1

        if(!this.table[index]){
            return null
        }

        while(this.table[index]){
            if(this.table[index][0] == key){
                this.table[index] = ["__DELETED__" , null]
                this.count--
                return
            }
            index = (index1 + (k * index2)) % this.size
            k++
        }
    }

    print(){
        for(let i=0; i<this.size; i++){
            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }

}


const table = new HashTable(50)

table.set("name" , "alameen")
table.set("age" , 18)
table.set("mane" , "al")
table.set("anme" , "anime")

table.print()