class Character {
    constructor(name = 'Unknown', age = 0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Magicien extends Character {
    constructor(name, age, element=''){
        super(name, age);
        this.element = element;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.element.length > 0)
            return description += ` Mon élément est ${this.element}`;
    }
}

const Gandalph = new Character('Gandalph', 245)
console.log(Gandalph.getDescription());

const Merlin = new Magicien('Merlin', 200, 'feu')
console.log(Merlin.getDescription());