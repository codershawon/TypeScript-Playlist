"use strict";
//Normal Function
function add(num1, num2) {
    return (num1 + num2);
}
add(5, 5);
// Arrow Function
const multiply = (num1, num2) => num1 * num2;
// Object --> function --> method
//If we write function in an object then it is called as a Method.
const poorUser = {
    name: "Shawon",
    balance: 0,
    addBalance(balance) {
        // return  (this.balance + balance);
        return (`My balance is ${this.balance + balance}`);
    }
};
console.log(poorUser);
//Callback Function
const arr = [1, 2, 3];
const newArr = arr.map((num) => num * num);
