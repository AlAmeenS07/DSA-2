

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.count = 0
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
            if(this.table[index] == key){
                this.table[index][1] = value
                return
            }

            index = (index + 1) % this.size
        }
        this.table[index] = [key , value]
        this.count++
    }

    get(key){
        let index = this.hash(key)

        if(!this.table[index]){
            return undefined
        }

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

        if(!this.table[index]){
            return null
        }

        while(this.table[index]){
            if(this.table[index][0] == key){
                this.table[index] = ["__DELETED__" , null]
                this.count--
                return
            }
            index = (index + 1) % this.size
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

const table = new HashTable(20)

table.set("name" , "alameen")
table.set("age" , 18)
table.set("mane" , "al")

table.print()