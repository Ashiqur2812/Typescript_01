{
    // abstraction 1.interface  2.abstract class

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('I am stopping the car engine');
        }
        move(): void {
            console.log('I am moving the car');
        }
        test(): void {
            console.log('I am just writing');
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();

    // practice abstract class


    interface Vehicle2 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    abstract class Cycle {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log('This is a test');
        }
    }

    class MyCar extends Cycle {
        startEngine(): void {
            console.log('I started driving the car due to some limitations ');
        }
        stopEngine(): void {
            console.log('I stopped the car yesterday');
        }
        move(): void {
            console.log('I moved the car from there to avoid unnecessary activities');
        }
        test(): void {
            console.log('This is a test type example')
        }
    }

    const tool = new MyCar()
    tool.move()














}