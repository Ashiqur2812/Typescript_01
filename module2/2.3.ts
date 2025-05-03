{
    // generic type

    type GenericArr<T> = Array<T>;

    // const rollNumber: number[] = [3, 4, 6];
    const rollNumber: GenericArr<number> = [3, 4, 6];

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











}