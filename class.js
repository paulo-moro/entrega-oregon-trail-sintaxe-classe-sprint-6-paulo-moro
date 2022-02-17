
class Wagon {
    constructor(capacity){
        if(typeof(capacity) == "number"){
            this._capacity = capacity
    }else{
        return `Informe uma capacidade válida(number)`
    }
        this._passenger = []
    }
    get capacity(){
        return this._capacity
    }
    set capacity(value){
        if(typeof(value) == "number"){
            return this._capacity = value
        }
        else{
            return `Informe um valor válido de capacidade(number)`
        }
    }
    
    join(passenger){
        if(this.capacity > this._passenger.length){
            return this._passenger.push(passenger)
        }else{
            return "Não tem espaço para ele(a)!"
        }

    }
    totalFood(){
        let accFood = 0
        this._passenger.forEach((passageiro)=>{
            accFood += passageiro.food
        })
        return accFood
    }
    getAvailableSeatCount(){
        return this.capacity -this._passenger.length
    }
    shouldQuarantine(){
        let quarentine = false
        this._passenger.forEach((passageiro)=>{
            if(passageiro.isHealth == false){
                return quarentine = true

            }
        })
        return quarentine
    }
}

class Traveler{
    constructor(nome){
       
        this._nome = nome
        this._food = 1
        this._isHealth = true
        
    }
    get nome(){
        return this._nome
    }
    set nome(value){
        if(typeof(value) != "string"){
            return 'Informe um formato válido de nome(string)'
        }
        else{
            this.nome = value
        }
    }
    get isHealth(){
        return this._isHealth
    }
    set isHealth(value){
        if(typeof(value) != "boolean"){
            return 'Informe um formato válido de isHealth(boolean)'
        }
        else{
            return this._isHealth = value
        }
    }

    get food(){
        return this._food
    }
    set food(value){
        if(typeof(value) != "number"){
            return 'Informe um formato válido de food(number)'
        }
        else{
            this._food = value
        }
    }

    hunt(){
        
        this.food += 2
        
        return `${this.nome} caça mais comida`    
    }
    
    eat(){
        if(this.food - 1 < 0){
            this.food = 0
            this.isHealth = false
            return `${this.nome} agora está com fome(doente)`
        }else{
            
            return this.food -= 1
        }
    }
}
