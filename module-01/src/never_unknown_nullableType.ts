{
    // nullable types are used to indicate that a variable can be of any value, including undefined and/or null values.

    const searchName=(value: string | null)=>{
        if(value){
            console.log("Searching");
        }else{
            console.log("There is nothing to search");
        }
    }
    searchName(null);

    //unknown type

    const getSpeedInMeterPerSecond=(value: unknown)=>{
        if(typeof value === "number"){
            const convertedSpeed=value*3.6;//converting km/h to m/s
            console.log(`The speed is ${convertedSpeed} meters per second`)
        }
        else if(typeof value === "string"){
            const [result, unit]= value.split(" ");//splitting the string into an array of strings
            const convertedSpeed=parseFloat(result)*3.6;
            console.log(`The speed is ${convertedSpeed} meters per second`)
        }else{console.log("Wrong Input")};
    }
    getSpeedInMeterPerSecond(null);

    //never type

    const throwError=(msg: string): never => {throw new Error(`${msg}`)};
    throwError("Ay keya hua");
}