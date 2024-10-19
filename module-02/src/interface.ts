{
  /* Type alias */
    type User1={
        name: string,
        age: number
    }
     /* Interface */
  interface User2{ // interface is a type of object
    name: string,
    age: number
  }
    type UserWithRole1= User1 & {role: string};
    
    interface UserWithRole2 extends User2{ role: string };
    const user1:UserWithRole2={
        name: 'Shawon',
        age: 24,
        role: "developer"
   }

   //js --> object, array --> object, function --> object
   /* Type alias */
   type Roll1 = number[]
  /* Interface */
   interface Roll2{
    [index: number]: number;
   }

   const rollNumber: Roll2 = [5, 6];

   type Add1 =(num1:number, num2:number)=>number;
   interface Add2{
    (num1: number, num2: number):number;
   }

   const add: Add2= (num1,num2)=>num1+num2;

}

/* Note: For array & function use type alias & for object use interface & type alias */
