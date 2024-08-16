{
    //Object Destructuring

const bio={
    id: 1,
    name:{
        firstName: "Shawon",
        lastName: "Barua"
    },
    address: "Chittagong",
    contactNo: "0176-789456"
}
const {id, name:{firstName}}=bio;

//Array Destructuring
const myFriends=["Kollol","Shawon","Mir", "Imran", "Jubo"];
const [,, bestFriend,...rest]=myFriends;
console.log(myFriends);
}