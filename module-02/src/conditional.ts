{
    //Conditional Type
    type a1= number;
    type b1= string;

    type x= a1 extends number? true : false;
    type y= a1 extends string? true : b1 extends undefined? undefined: any;

    type Sheikh={
        bike: string;
        car: string;
        ship: string;
    }

    //car aase kina / bike ase kina / ship ase kina / tractor ase kina

    type checkVehicle<T>= T extends keyof Sheikh? true : false;

    type HasTractor= checkVehicle<'tractor'>;
}