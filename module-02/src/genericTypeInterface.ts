{
    // Generic Type using interface
    interface Developer<T,X=null>{
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseDate: number;
        }
        smartwatch:T;
        bike?: X;
    }
    interface AppleWatch{
            brand: string;
            model: string;
            heartTrack: boolean;
            sleepTrack: boolean;
    }
    interface Bike{
        model: string;
        price: string;
    }
    const richDeveloper: Developer<AppleWatch, Bike>={
        name:"Shawon",
        computer:{
            brand:"Apple",
            model:"Macbook Pro 13 inch 2020",
            releaseDate:2020,
        },
        smartwatch:{
            brand:"Samsung",
            model:"Galaxy Watch 3",
            heartTrack: true,
            sleepTrack:true,
        },
        bike:{
            model: "Suzuki",
            price: "4 lakh"
        }
    }
    type HpWatch={
            brand:string;
            model: string;
            releaseDate: number;
    }
    const poorDeveloper: Developer<HpWatch>={
        name:"Mr X",
        computer:{
            brand:"HP",
            model:"Xkkf",
            releaseDate:2020,
        },
        smartwatch:{
            brand:"Xiomi",
            model:"Xiomi Watch 3",
            releaseDate:2021,
        }
    }
}