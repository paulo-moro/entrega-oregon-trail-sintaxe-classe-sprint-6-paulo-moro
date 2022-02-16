
class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passenger = []
    }
       
    
    join(passenger){
        if(this._capacity > this._passenger.length){
            return this._passenger.push(passenger)
        }else{
            return "Não tem espaço para ele(a)!"
        }

    }
    totalFood(){
        let accFood = 0
        this._passenger.forEach((passageiro)=>{
            accFood += passageiro._food
        })
        return accFood
    }
    getAvailableSeatCount(){
        return this._capacity-this._passenger.length
    }
    shouldQuarantine(){
        let quarentine = false
        this._passenger.forEach((passageiro)=>{
            if(passageiro._isHealth == false){
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
    

    hunt(){
        
        this._food += 2
        
        return `${this.nome} caça mais comida`    
    }
    
    eat(){
        if(this._food - 1 < 0){
            this._food = 0
            this._isHealth = false
            return `${this.nome} agora está com fome(doente)`
        }else{
            if(this._isHealth === false){
                this._isHealth = true
                this.reducefood -= 1
                return `${this.nome} agora se recuperou após se alimentar(saudavel)`    
            }
            return this._food -= 1
        }
    }
}

let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);