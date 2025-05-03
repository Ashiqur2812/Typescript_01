{
    // interface

    type User1 = {
        name: string,
        age: number;
    };

    interface User2 {
        name: string,
        age: number;
    }

    type UserWithRole1 = User1 & { role: string; };

    interface UserWithRole2 extends User1 {
        role: string;
        isMarried: boolean;
        email: string,
        salary: number
    }

    const user: User2 = {
        name: 'Sarah',
        age: 30
    };

    const user1: UserWithRole2 = {
        name: 'Maria',
        age: 25,
        role: 'admin',
        isMarried: true,
        email: 'sarah@gmail.com',
        salary: 30000

    };

    // js --> object, array --> object function --> object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }


    const rollNumber1: Roll2 = [1, 2, 3];

    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number;
    }


    const add: Add2 = (num1, num2) => num1 + num2;







}