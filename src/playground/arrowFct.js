/* function square(x) {
    return x*x;
};

console.log(square(7))

const squareArrow = (x) => {
    return x*x
};

console.log(squareArrow(9))

const squareArrowConcat = (x) => {
    return x.split(' ')[0];
};
dd
console.log(squareArrowConcat("Anna Maria"))

const squareArrowConcats = (x) => x.split(' ')[0];

console.log(squareArrowConcats("Anna Maria")) */

const test = 1

const add = function(a, b){
    console.log(arguments);
    return a + b;
}

console.log(add(1, 2));

const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(addArrow(1, 2));

const multiplier = {
    numbers: [1,3,6,8,56],
    multipleBy: 5,
    //multiply(numbers, multipleBy) => {}; MARCHE PAS CAR PAS ACCEES AUX ARGUMENTS DE L'OBJET
     /* multiply(){
        const test = this.numbers.map(function(number){
            return number;
        })

        return test
    } */
    multiply(){
        return this.numbers.map(number => number * this.multipleBy);
    }
   
}

console.log(multiplier.multiply());