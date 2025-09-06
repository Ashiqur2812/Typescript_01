{

    // Type elias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string;
    };

    const std1: Student = {
        name: 'sarah',
        age: 29,
        gender: 'male',
        contactNo: '01648800705',
        address: 'ctg'
    };

    const std2: Student = {
        name: 'Mir',
        age: 40,
        gender: 'male',
        contactNo: '01648800705',
        address: 'dhk'
    };


    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'roy';
    const isAdmin: IsAdmin = true;



    type Add = (x: number, y: number) => number;

    const add: Add = (num1, num2) => num1 + num2;




}

// i am learning typescript 



