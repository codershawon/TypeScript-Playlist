{
    // Ternary Operator:
    // Optional Chaining
    //Nullish Coalescing Operator
const age: number=18;

if(age>=18){
    console.log("You can drink beer");
}else{
    console.log("You cannot drink beer");
}

const isAdult= age >=18? "adult" :"child";
// console.log({isAdult});

//Nullish Coalescing Operator: ??. ?? = null || undefined --> decision making. If we want to set default value based on null or defined that case, we use nullish coalescing operator.
const isAuthenticated="";

const result1= isAuthenticated ?? "Guest";
const result2= isAuthenticated? isAuthenticated : "Guest";
console.log({result1, result2});
///
type User={
    name: string;
    address:{
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}
const user: User={
    name: "Shawon",
    address: {
        city: "ctg",
        road: "Nasirabad",
        presentAddress: "Ctg",
    }
}
const permanentAddress= user?.address?.permanentAddress?? "No parmanent address";
console.log({permanentAddress})
}