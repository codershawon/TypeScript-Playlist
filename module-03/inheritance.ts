{
    //
    // oop-> inheritance;
    class Parent{
        name: string;
        age: number;
        address:string;

        constructor(name: string, age: number, address:string){
            this.name=name;
            this.age=age;
            this.address=address;
         }
         getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
         }
     }
     class Student extends Parent{

        constructor(name: string, age: number, address:string){
            super(name,age, address);
         }
     }
     const student1 = new Student("Shawon",24,"Chittagong");

     class Teacher extends Parent{
        designation: string;

        constructor(name: string, age: number, address:string, designation: string){
            super(name, age, address);
            this.designation=designation;
         }
         getClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`);
         }
     }
     const teacher1 = new Teacher("Mr Y",56,"Chittagong", "professor");
    //  teacher1.
}