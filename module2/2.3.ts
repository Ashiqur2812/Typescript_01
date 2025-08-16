{
    // generic type
    type GenericArr<T> = Array<T>;

    // const rollNumber: number[] = [3, 4, 6];
    const rollNumber: GenericArr<number> = [3, 4, 6];
    console.log(rollNumber);

    // const fruits: string[] = ['apple', 'orange', 'mango', 'banana'];
    const fruits: GenericArr<string> = ['apple', 'orange', 'mango', 'banana'];
    console.log(fruits);

    // const boolArr: boolean[] = [true, false, true];
    const boolArr: GenericArr<boolean> = [true, false, true];
    console.log(boolArr);

    const user: GenericArr<{ name: string, age: number; }> = [
        {
            name: 'sarah',
            age: 25
        },
        {
            name: "maria",
            age: 30
        },
    ];
    console.log(user);

    const add = (num1: number, num2: number) => num1 + num2;
    console.log(add(12, 12));

    type GenericTuple<x, y> = [x, y];

    const person: GenericTuple<string, string> = ['sarah', 'maria'];

    const person1: GenericTuple<number, { name: string, email: string, isMarried: boolean; }> = [1234, { name: 'fine', email: 'fine@gmail.com', isMarried: true }];
    console.log(person1);

    //     const person2: GenericTuple<{ name: string, email: string; }, boolean> = [{ name: 'tyranny', email: 'ash@gmail.com' }, true];
    //     console.log(person2)
    // }

    function identity<T>(value: T) {
        return value;
    }
    const res1 = identity<string>('sarah');
    console.log(res1);

    function idle<T>(val: T) {
        console.log(val);
    }
    idle<boolean>(true);

    type MyIdle<T> = {
        status: 200,
        data: T;
    };

    const myIdle: MyIdle<{ name: string; }> = {
        status: 200,
        data: { name: 'maria' }
    };

    console.log(myIdle);

    const myIdle1: MyIdle<string> = {
        status: 200,
        data: 'ok'
    };
    console.log(myIdle1);

    // use multiple generics

    function multipleGen<T, Q>(a: T, b: Q): [T, Q] {
        return [a, b];
    }
    const result = multipleGen<string, number>('sarah', 5);
    console.log(result);

    function myFunc<T, Q>(a: T, b: Q): [T, Q] {
        return [a, b];
    }
    console.log(myFunc<number, string>(12, 'maria'));

}

{

    type GenericArray<T> = Array<T>;

    const rollNumbers1: number[] = [3, 6, 8];
    const rollNumbers: Array<number> = [3, 6, 8];
    const rollNumbers2: GenericArray<number> = [3, 6, 8];

    const mentors1: string[] = ['sarah', 'maria', 'fine'];
    const mentors: Array<string> = ['sarah', 'maria', 'fine'];
    const mentors2: GenericArray<string> = ['sarah', 'maria', 'fine'];

    const booleanArray: boolean[] = [true, false];
    const booleanArray1: Array<boolean> = [true, false];
    const booleanArray2: GenericArray<boolean> = [true, false];

    // type Add<X, T> = [X, T];

    const add = (x: number, y: number): number => x + y;
    console.log(add(51, 52));

    const user: GenericArray<{ name: string, age: number; }> = [
        {
            name: 'finale',
            age: 32
        },
        {
            name: 'mafia',
            age: 21
        }
    ];

    const agent: GenericArray<{ name: string, age: number, isMarried: boolean; }> = [
        {
            name: 'Abraham',
            age: 32,
            isMarried: true
        },
        {
            name: 'Ismael',
            age: 28,
            isMarried: true
        },
    ];
    console.log(agent);

    // generic tuple

    const person: [string, string] = ['sarah', 'mafia'];

    type GenericTuple<X, Y> = [X, Y];
    const person1: GenericTuple<string, string> = ['finer', 'miscellaneous'];
    console.log(person1);

    const person2: GenericTuple<number, { name: string, email: string; }> = [1234,
        {
            name: 'Green',
            email: 'green@gmail.com'
        }
    ];
    console.log(person2);

    type Person3 = {
        name: string,
        age: number,
        address: {
            presentAddress: string, permanentAddress: string;
        };
    };

    const person3: GenericTuple<number, Person3> = [1111, { name: 'Flesh', age: 23, address: { presentAddress: 'ctg', permanentAddress: 'Dhaka' } }];
    console.log(person3);

    interface Person4 { country: string, district: number, division: number, capital: string; }

    const person4: GenericTuple<string, Person4> = ['Bangladesh', { country: 'Bangladesh', district: 64, division: 8, capital: 'Dhaka' }];
    console.log(person4);

    interface Person5 {
        name: string,
        age: number,
        address: {
            presentAddress: string,
            permanentAddress: string;
        };
    }

    const person5: GenericTuple<number, Person5> = [1111, { name: 'Flesh', age: 23, address: { presentAddress: 'ctg', permanentAddress: 'Dhaka' } }];
    console.log(person5);

    // interface generic
    interface Developer<T, Q = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: Q;
    }

    interface DevTool {
        name: string,
        price: number,
        releaseYear: number;
    }

    interface Bike {
        brandName: string;
        isNew: boolean;
        speed: string;
        color: 'red' | 'white' | 'black';
    }

    const poorDeveloper: Developer<DevTool> = {
        name: 'Dell',
        computer: {
            brand: 'Casio',
            model: 'stg',
            releaseYear: 2022
        },
        smartWatch: {
            name: 'spider',
            price: 4000,
            releaseYear: 2025
        }
    };
    console.log(poorDeveloper);

    const richDeveloper: Developer<DevTool, Bike> = {
        name: 'MacBook',
        computer: {
            brand: 'Apple',
            model: 'AK47',
            releaseYear: 2025
        },
        smartWatch: {
            name: 'Ben10',
            price: 9000,
            releaseYear: 2025
        },
        bike: {
            brandName: 'Yamaha',
            isNew: true,
            speed: '200cc',
            color: 'red'
        }
    };
    console.log(richDeveloper);


}

// I am learning