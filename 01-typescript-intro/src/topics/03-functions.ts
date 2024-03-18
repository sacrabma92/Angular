
function addNumbers(a: number, b:number){
    return a + b
}
const result : number = addNumbers(1,2)
console.log({result})

const addNumersArrow = ( a: number, b: number ) => {
    return a + b;
}
const result2 : number = addNumersArrow(5,4)
console.log(result2)

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base
}
const multiplyResult : number = multiply(6)
console.log(multiplyResult)

console.log('============================')

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character : Character, amount : number ) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter( strider, 10)

strider.showHp();

export {};