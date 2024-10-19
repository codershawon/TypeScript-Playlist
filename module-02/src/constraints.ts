{
    /* Constraints */

    const addCourseToStudent=<T extends {id: number; name: string;}>(student:T)=>{
        const course="next level web development"
    return{
        ...student,
        course
    }
  }
    const student1=addCourseToStudent<{
        id: number;
        name: string;
        devType: string;
    }>({
        id:222, 
        name:"Shawon", 
        devType:"frontend"
    });
    const student2=addCourseToStudent({id:22, name:"Mr X", hasWatch:"Apple"});
}