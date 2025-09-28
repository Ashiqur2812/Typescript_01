{
    // OOP
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name,
            this.species = species,
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} is ${this.sound}`);
        }
    }

    const dog = new Animal('German Shepard', 'Dog', 'barking');

    const cat = new Animal('persian', 'local', 'meow');

    cat.makeSound();
    dog.makeSound();

    class Person {
        constructor(public name: string, public age: number, public isMarried: boolean) { }
        people() {
            console.log(`This is ${this.name}. I am ${this.age} years old. My marital status is ${this.isMarried}.`);
        }
    }

    const man = new Person('roy', 25, true);
    const woman = new Person('sarah', 16, false);

    man.people();
    woman.people()

}

// I am learning typescript.

