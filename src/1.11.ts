{

    // ternary operator || optional chaining || nullish coalescing

    const age: number = 15;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('child');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });

    //  Nullish coalescing operator

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 });
    console.log({ result2 });

    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            permanentAddress?: string;
        };
    };

    const user: User = {
        name: 'sarah',
        address: {
            city: 'ctg',
            road: 'Awesome road',
            presentAddress: 'ctg town'
        }
    };

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';
    console.log({ permanentAddress });


    const a: number = 12;
    const b: string = '12';
    console.log(`the sum is: ${a + b}`);

    type Person = {
        name: 'sarah',
        age: number,
        email?: string,
        phoneNumber: string;
    };

    const person: Person = {
        name: 'sarah',
        age: 23,
        phoneNumber: '01648800705'
    };

    type Add = (a: number, b: number) => number;

    const add: Add = (a, b) => {
        return a * b;
    };

    // spread operator

    const fruits: (string | string[])[] = ['banana', 'mango', 'apple', 'orange'];
    const flowers: string[] = ['rose', 'belly', 'lilly'];
    fruits.push(flowers);
    console.log(fruits);

    // object operator
    type One = {
        name: string,
        email: string,
    };

    const one: One = {
        name: 'sarah',
        email: 'sarah@gmail.com'
    };

    type Two = {
        name: string,
        address: string;
    };

    const two: Two = {
        name: 'maria',
        address: 'ctg'
    };

    const three = { ...one, ...two };
    console.log(three);

}