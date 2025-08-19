{

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name,
                this.age = age;
            this.address = address;
        }
        getSleep(numOfSleep: number) {
            console.log(`This is ${this.name}. I am now ${this.age} years old. I live in ${this.address}. I sleep ${numOfSleep} hours everyday.`);
        }
    }

    class Student extends Parent {
        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
        // getSleep(numOfSleep: number) {
        //     console.log(`This is ${this.name}. I am now ${this.age} years old. I live in ${this.address}. I sleep ${numOfSleep} hours everyday.`);
        // }
    }

    const student1 = new Student('sarah', 35, 'Dhaka');
    student1.getSleep(7);


    class Teacher extends Parent {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        // getSleep(val: number) {
        //     console.log(`This is a ${this.name}. Currently i am ${this.age} years old. I live in ${this.address}. I am a ${this.designation} as well.`);
        // }
        takeClass(numOfClass: number) {
            console.log(`${this.name} sir will take ${numOfClass} class. He is a ${this.designation} as well.`);
        }
    }

    const teacher = new Teacher('Abraham', 38, 'Dhaka', 'professor');
    teacher.getSleep(6);
    teacher.takeClass(3);

}

// practice 

{
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfSleep: number) {
            console.log(`This is ${this.name}. I am ${this.age} years old. I live in ${this.address}. I sleep ${numOfSleep} hours a day`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const result = new Student('Pal', 23, 'Dhaka');
    result.getSleep(5);

    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass:number){
            console.log(`I take ${numOfClass} class a day.`)
        }
    }
    const res = new Teacher('Bijoy',26,'Chittagong','professor')
    res.takeClass(4)
    res.getSleep(3)


}