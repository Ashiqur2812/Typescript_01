{
    // abstraction 1.interface  2.abstract class

    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle {
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
            console.log('This is a test type example');
        }
    }

    const tool = new MyCar();
    tool.move();

}

{
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle {
        startEngine(): void {
            console.log('-->', 'I will start the car within a minute.', '<--');
        }
        stopEngine(): void {
            console.log('-->', 'I am going to stop the car within 10 minutes.', '<--');
        }
        move(): void {
            console.log('-->', 'I will move the car according to the instructions.', '<--');
        }
    }

    abstract class Traffic {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log('I am testing the car.');
        }
    }

    class Plane extends Traffic {
        startEngine(): void {
            console.log('The plane will fly in the sky');
        }
        stopEngine(): void {
            console.log('The plane will take off on the soil with a few minutes.');
        }
        move(): void {
            console.log('The plane will move for testing purpose');
        }
        test(): void {
            console.log('This is being tested for 2 hours.')
        }
    }



    // const toyotaCar = new Car();
    // toyotaCar.startEngine();
    // toyotaCar.stopEngine();
    // toyotaCar.move();

    

    // const suzukiBike = new Bike();
    // suzukiBike.startEngine();
    // suzukiBike.stopEngine();
    // suzukiBike.move();











}