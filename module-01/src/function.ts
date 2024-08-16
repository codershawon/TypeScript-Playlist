//Normal Function

function add(num1:  number, num2:number): number{
    return (num1 + num2);
}
add(5, 5);

// Arrow Function

const multiply = (num1: number, num2: number):number => num1 * num2;

// Object --> function --> method
//If we write function in an object then it is called as a Method.

const poorUser={
    name: "Shawon",
    balance: 0,
    addBalance(balance:number):string{
        // return  (this.balance + balance);
        return (`My balance is ${this.balance + balance}`);
    }
}
console.log(poorUser);

//Callback Function

const arr: number[]=[1, 2, 3];
const newArr:number[]=arr.map((num:number): number=>num*num)