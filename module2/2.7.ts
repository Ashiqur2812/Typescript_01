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