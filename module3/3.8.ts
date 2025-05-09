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

{
    class Person {
        getSleep(): void {
            console.log('-->', 'I sleep more than 8 hours everyday', '<--');
        }
    }

    class Student extends Person {
        getSleep(): void {
            console.log('-->', 'I sleep more than 6 hours a day', '<--');
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log('-->', 'I sleep less than 5 hours a day', '<--');
        }
    }

    const getSleepHours = (param: Person) => {
        return param.getSleep();
    };

    const one = new Person();
    const two = new Student();
    const three = new Developer();

    getSleepHours(one);
    getSleepHours(two);
    getSleepHours(three);

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // pi *r *r

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
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
            return (this.height * this.width);
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    };

    const test = new Circle(12);
    const test1 = new Rectangle(12, 12);
    getShapeArea(test);
    getShapeArea(test1);








}