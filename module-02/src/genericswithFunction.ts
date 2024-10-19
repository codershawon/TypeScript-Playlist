{
    //function with generics

    const createArray=(param: string): string[]=>{
        return [param]
    }

    const createArrayWithGeneric=<T>(param:T): T[]=>{ 
        return [param];
    };

    const res1 = createArray('hello');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type Res1={
        id: number; 
        name: string
    }

    const resGenericObj=createArrayWithGeneric<Res1>({id:222, name: "Shawon"})


    const createArrayWithTuple=<T,Q>(param1:T, param2: Q): [T,Q]=>{ 
        return [param1, param2];
    };

    const res10 = createArrayWithTuple<string, number>('hello', 343);
    const res11 = createArrayWithTuple<string,{name: string}>('Bangladesh', {name:"Asia"});

    /////////

    const addCourseToStudent=<T>(student:T)=>{
        const course="next level web development"
    return{
        ...student,
        course
    }
}
    const student1=addCourseToStudent({id:222, name:"Shawon", devType:"frontend"});
    const student2=addCourseToStudent({id:22, name:"Mr X", hasWatch:"Apple"});

}