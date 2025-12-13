

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
        let ogIndex = this.hash(key)
        let index = ogIndex
        let k = 1
        while(this.table[index] && this.table[index][0] !== "__DELETED__"){
            if(this.table[index][0] == key){
                this.table[index][1] = value
                return
            }
            index = (ogIndex + (k*k)) % this.size
            k++
        }

        this.table[index] = [key , value]
        this.count++
    }

    get(key){
        let ogIndex = this.hash(key)
        let index = ogIndex

        if(!this.table[index]){
            return null
        }
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

        if(!this.table[index]){
            return null
        }
        let k = 1
        while(this.table[index]){
            if(this.table[index][0] == key){
                this.table[index] = ["__DELETED__" , null]
                this.count--
                return
            }
            index = (ogIndex + (k*k)) % this.size
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
table.set("place" , "alappuzha")
table.set("amne" , "kamni")

table.print()

table.remove("amne")

table.print()