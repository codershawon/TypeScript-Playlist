{
    //Type Alias is a shortcut for creating an alias to another type.
    type Student={
        name: string;
        age: number;
        gender: string;
        address: string;
        contactNo?: string;
    }

    const student1:Student={
        name: "Shawon",
        age: 24,
        gender: "Male",
        address: "Ctg",
        contactNo: "01868340362"
    }

/* ---------------*/
type UserName= string;
type IsAdmin= boolean;
const userName: UserName="Shawon";
const isAdmin: IsAdmin = true;

/*--------------------*/
type Add= (a:number, b: number)=>number;
const add:Add = (a,b) => a+b;
}