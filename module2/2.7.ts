{
    // Generic constraint with keyof operator

    type Vehicle = {
        bike: string,
        car: string,
        ship: string;
    };

    type Owner = 'bike' | 'car' | 'ship'; // manually

    type Owner2 = keyof Vehicle;

    // const person1: Owner = 'car'

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: 'sarah',
        age: 30,
        email: 'sarah@gmail.com'
    };

    const result1 = getPropertyValue(user, 'age');
    // console.log(result1);

    const getCharacter = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user1 = {
        name: 'fine',
        age: 28,
        isMarried: true
    };

    const result2 = getCharacter(user1, 'isMarried');
    console.log(result2);

    const getInfo = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user2 = {
        name: 'beauty',
        age: 25,
        address: 'ctg',
        isMarried: true
    };

    console.log(getInfo(user2, 'isMarried'));















}

{
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner1 = 'bike' | 'car' | 'ship';

    type Owner = keyof Vehicle;

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user = {
        name: 'sarah',
        age: 24,
        address: 'Dhaka'
    };

    user['address'];

    const res = getPropertyValue(user, 'age');
    console.log(res);

    const getString = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const person = {
        id: 12,
        name: 'life',
        email: 'life@gmail.com',
    };

    const result = getString(person, 'email');
    console.log(result);


}

{
    interface User {
        name: string;
        age: number;
    }

    type UserKeys = keyof User;

    function getValue(obj: User, key: UserKeys) {
        return obj[key];
    }

    const user: User = {
        name: 'Superb',
        age: 33
    };
    console.log(getValue(user, "name"));

    let c: any = 'Hello';
    c = 10;
    c = 'sarah';
    c = true;
    console.log(c);

    let b: unknown = 11;
    if (typeof b === 'string') {
        console.log(b.toUpperCase());
    } else if (typeof b === 'number') {
        console.log(b * b);
    } else {
        console.log(new Error('Use a string or number type'));
    }

    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    console.log(Direction.Left);

    enum Status {
        Success = 'Success',
        Failure = 'Failure'
    }
    console.log(Status.Failure)






}