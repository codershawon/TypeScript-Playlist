{
    //promise
    type Todo={
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo= async(): Promise<Todo>=>{
        const res= await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data= await res.json();
        return data
    }
  getTodo();
    const createPromise=(): Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data:string="Hello World";
            if(data){
                resolve(data)
            }else{
                reject("Error");
            }
        })
    }

    //calling create promise function
    
    const showData= async(): Promise<string>=>{
        const data: string= await createPromise();
        return data;
        // console.log(data)
    }
    showData();
}