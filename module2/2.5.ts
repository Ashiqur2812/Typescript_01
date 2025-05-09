{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param];
    };

    const result1 = createArray('Bangladesh');
    console.log(result1);

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const resGeneric = createArrayWithGeneric<string>('Australia');
    console.log(resGeneric);

    interface User1 { id: number, name: string; }

    const resGenericObject = createArrayWithGeneric<User1>({
        id: 222,
        name: 'sarah'
    });
    console.log(resGenericObject);

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const result2 = createArrayWithTuple<string, boolean>('China', true);
    console.log(result2);

    const result3 = createArrayWithTuple<string, { name: string; }>('Japan', { name: 'Asia' });
    console.log(result3);

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        };
    };

    const student1 = addCourseToStudent({
        name: 'maria',
        email: 'maria@gmail.com',
        devType: 'MERN Stack Developer'
    });
    console.log(student1);

    const student2 = addCourseToStudent({
        name: 'sarah',
        email: 'sarah@gmail.com',
        hasWatch: 'apple watch'
    });
    console.log(student2);

    // practice -->

    function getArray<T>(item: T[]): T[] {
        return [...item];
    }
    const result5 = getArray<string>(['mango', 'orange', 'apple', 'banana']);
    console.log(result5);
    const result4 = getArray<number>([12, 23, 45, 67]);
    console.log(result4);

    function identity<T>(arg: T): T {
        return arg;
    }
    const result6 = identity<string>('maria');
    console.log(result6);

    // practice -->

    function getFirstElement<T>(val: T[]): T {
        return val[2];
    }
    const result7 = getFirstElement<string>(['a', 'b', 'c', 'd', 'e']);
    console.log(result7);                    //0   1    2    3    4  


    function pair<T, Q>(param1: T, param2: Q): [T, Q] {
        return [param1, param2];
    }
    const result8 = pair<string, number>('sarah', 45);
    console.log(result8);

    function husbandWife<T, Q>(val1: T, val2: Q): [T, Q] {
        return [val1, val2];
    }

    const result9 = husbandWife<string, boolean>('children', true);
    console.log(result9);

    // practice with function
    function printName<T extends { name: string; }>(arr: T) {
        console.log(arr);
    }
    printName({ name: 'fine' });

    function printString<T extends string | number>(arr: T) {
        console.log(arr);
    }
    printString(12345);

    function getProperty<T, X extends keyof T>(obj: T, key: X) {
        return obj[key];
    }
    const book = { name: 'Typescript', page: 300 };
    console.log(getProperty(book, "page"));

    // another practice

    function myTurn<X, T extends keyof X>(obj: X, key: T) {
        return obj[key];
    }

    const hobby = { name: 'traveling', visit: 12 };
    console.log(myTurn(hobby, "name"));

    // practice with generics

    interface User {
        name: string,
        age: number;
    }

    function user<X extends User>(val: X) {
        console.log(`Hello ${val.name}`);
    }
    user({ name: 'mafia', age: 25 });

    type Agent = {
        name: string,
        age: number,
        isMarried: boolean;
    };

    function agent<X extends Agent>(val: X) {
        console.log(`This is ${val.name}. I am ${val.age} years old. My marital status is ${val.isMarried}.`);
    }

    agent({ name: 'awesome', age: 25, isMarried: false });

    interface Person {
        name: string;
    }

    interface Developer {
        age: number;
    }

    function admin<X extends Person & Developer>(val: X) {
        console.log(`This is ${val.name}. I am now ${val.age}`);
    }
    admin({ name: 'super', age: 25 });

    function combine<X extends string | number | boolean>(a: X, b: X) {
        return [`${a} ${b}`];
    }
    console.log(combine('sarah', 'mafia'));
    console.log(combine(10, 20));
    console.log(combine(true, false));


}

{
    const createArray = (param: string): string[] => {
        return [param];
    };
    console.log(createArray('Nigeria'));

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param];
    };
    const res = createArrayWithGenerics<string>('England');
    const res1 = createArrayWithGenerics<number>(2400);
    console.log(res);
    console.log(res1);

    interface Student {
        id: number,
        name: string;
    }

    const res2 = createArrayWithGenerics<Student>({ id: 12, name: 'sarah' });
    console.log(res2);

    const createArrayWithTuples = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const result = createArrayWithTuples<number, number>(12, 12);
    console.log(result);

    interface Three {
        name: string,
        age: number,
        born: number;
    }

    const result2 = createArrayWithTuples<string, Three>('Link', { name: 'alpha', age: 33, born: 2001 });
    console.log(result2);

    interface One {
        name: string,
        age: number,
        isMarried: boolean,
        address: string;
    }

    interface Two {
        name: string,
        wifeName: string,
        isChild: boolean;
    }

    const res3 = createArrayWithTuples<One, Two>(
        {
            name: 'sarah',
            age: 32,
            isMarried: true,
            address: 'Dhaka'
        },
        {
            name: 'Adam',
            wifeName: 'Eve',
            isChild: true
        }
    );
    console.log(res3);







}