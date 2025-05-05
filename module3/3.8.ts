{
    // polymorphism

    class Person {
        getSleep() {
            console.log('I am sleeping 8 hours a day');
        }
    }

    class Student {
        getSleep() {
            console.log('I sleep 7 hours a day');
        }
    }

    class Developer {
        getSleep() {
            console.log('I sleep 6 hours a day');
        }
    }


    const getSleepHours = (param: Person) => {
        return param.getSleep();
    };

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepHours(person1);
    getSleepHours(person2);
    getSleepHours(person3);

    // second example

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    

    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.width * this.height;
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    };

    const shape1 = new Shape();
    const shape2 = new Rectangle(10, 20);








}