{
    //Generic Type using type alias
     type GenericArray<T>= Array<T>
    //const rollNumbers: number[]=[1,2];
    const rollNumbers:GenericArray<number> = [1, 2]; // Different way to write the same thing as above line

    // const mentors:string[]=["Sai","Krishna"];
    const mentors:GenericArray<string>=["Sai","Krishna"];

    // const boolArray:boolean[]=[true,false];
    const boolArray:GenericArray<boolean> = [true, false];
    
    /* Generic Array of object */
    const user: GenericArray<{name: string, age: number}>=[
        {
            name: "Shawon",
            age: 25
        },
        {
            name: "Kollol",
            age: 25
        },
    ]

    const add=(x:number,y:number)=>x+y;
    add(1,2);

    /* Generic Typle */
    type GenericTuple<X,Y>=[X, Y];
    
    const manush: GenericTuple<string,string>=["Shawon","kollol"];

    const UserWithId: GenericTuple<number,{name: string, email: string}>=[1212,{name:"Shawon", email:"shawon@gmail.com"}];
    
    
    
}