{
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('It is shouting randomly without any restriction');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('I am barking desperately');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeow() {
            console.log('I am meowing');
        }
    }

    //  To Handle smartly using function method

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeow();
        } else {
            animal.makeSound();
        }
    };


    // const findAnimal = (animal:Animal) => {
    //     if(animal instanceof Cat){
    //         animal.makeMeow()
    //     }
    // }



    const dog = new Dog('foreign dog', 'australian');
    // dog.makeBark()
    const cat = new Cat('Local cat', 'Bangladeshi');
    // cat.makeMeow()
    // console.log(cat.name)

    // getAnimal(dog);
    getAnimal(cat);

}

{


    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('They are animal');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('The dog is barking outside now');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeow() {
            console.log('The cat is meowing');
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            return animal.makeBark();
        } else if (isCat(animal)) {
            return animal.makeMeow();
        }
    };

    const cat = new Cat('biral', 'local');
    getAnimal(cat);
    console.log(cat.name);
    console.log(cat.species);
    cat.makeSound();
    const dog = new Dog('foreigner dog', 'british');
    getAnimal(dog);





}

{
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('loudly shouting');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('It is barking with an awkward sound.');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeow() {
            console.log('It is meowing repeatedly.');
        }
    }

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            return animal.makeBark();
        } else if (isCat(animal)) {
            return animal.makeMeow();
        } else {
            return animal.makeSound();
        }
    };

    const cat = new Cat('Meni', 'indian');
    const dog = new Dog('Tom', 'local');

    getAnimal(dog);
    getAnimal(cat);



}

// I am learning typescript 



