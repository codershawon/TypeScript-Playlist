{
    //
    //utility types
    //pick
    type Person ={
        name: string;
        age: number;
        email?:string;
        contactNo: string
    }

    type NameAge= Pick<Person, "name" | "age">
    //Omit

    type contactInfo = Omit<Person, "name" | "age">

    //Required
    type PersonRequired = Required<Person>

    //Partial
    type PersonPartial = Partial<Person>

    //Readonly
    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly ={
        name:"John", 
        age:25, 
        contactNo:"1234567890"
    }
    person1.name="Jack"

    //Record

    type MyObj = Record<string, string>
    const EmptyObj: Record<string, unknown>={}

    const obj1: MyObj ={
        a: "abc",
        b: "def",
        c: "ghi",
        d: "jkl",
        e: 5
    }
    //
}