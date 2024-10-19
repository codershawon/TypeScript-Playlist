{
    /* Generic Constraint with key of operator */
    type Vehicle ={
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; //manually created keyof type for owner
    type Owner2= keyof Vehicle  //automatically generated keyof type for owner 

    // const person1 : Owner2= ""

    const getPropertyValue=<X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key];
    }
    const user={
        name: "Shawon barua",
        age: 26,
        address: "ctg"
    }

    const car={
        model:"bmw",
        year:2021
    }
    const result1=getPropertyValue(car,"model")
}