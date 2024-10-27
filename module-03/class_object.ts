{
    //oop-> class
    class Animal{
    //   public name: string;
    //   public species: string;
    //   public sound: string;

      //parameter properties

      constructor(public name: string, public species: string, public sound: string){
        // this.name=name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound(){
        console.log(`The ${this.name}'s sound is ${this.sound}`);
    }
    }
    const dog= new Animal("German Shepard", "dog", "Ghew Ghew");
    dog.makeSound()
}