{
    function getData() {
        const data: string = 'I will complete this course successfully and become a next level web developer';
        return data;
    }

    console.log(getData());

    // practice 02

    //     Objective: Create a function with parameters and an optional literal type.

    //         Instructions:

    // Define a function that takes:
    //     name(string);
    //     age(number);
    //     role(optional, with type 'admin' | 'user' | 'guest')
    // The function should log these values or perform a basic action.



    function getData1(name: string, age: number, role?: 'admin' | 'user' | 'guest'): void {
        const result = { name, age, role };
        console.log(result);
    }
    getData1('sarah', 23, 'user');

    // practice 03

    //  Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

    type Person = {
        Name: string,
        Address: string,
        HairAndEyeColor: 'black' | 'red',
        IncomeAndExpense: {
            Income: number,
            Expense: number;
        },
        Hobbies: string[],
        FamilyMembers: number,
        Job: string,
        Skills: string[],
        IsMarried: boolean,
        Friends: string[];
    };

    const person: Person = {
        Name: 'sarah',
        Address: 'ctg',
        HairAndEyeColor: 'black',
        IncomeAndExpense: {
            Income: 30000,
            Expense: 20000
        },
        Hobbies: ['gardening', 'reading books', 'traveling'],
        FamilyMembers: 6,
        Job: 'Frontend Engineer',
        Skills: ['HTML', 'CSS', 'Javascript', 'React', 'Express', 'Node'],
        IsMarried: true,
        Friends: ['sarah', 'maria', 'roy', 'fine']
    };

    console.log(person);

};














