{
    // type guard
    // typeof --> type guard

    const add = (param1: string | number, param2: string | number): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.valueOf();
        }
    };
    const result = add(12, 50);
    console.log(result);
    const result1 = add('12', 12);
    console.log(result1);

    const myFunction = (param1: string | number, param2: string | number): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + ' & ' + param2.toString();
        }
    };
    const result2 = myFunction(512, 77);
    console.log(result2);
    const result3 = myFunction('sarah', 'maria');
    console.log(result3);

    // in guard

    type NormalUser = {
        name: string;
    };

    type AdminUser = {
        name: string,
        role: 'admin';
    };

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name}. And my role is ${user.role}.`);
        }
    };

    // getUser({ name: 'sarah', role: 'admin' });

    const normalUser: NormalUser = {
        name: 'mafia'
    };
    getUser(normalUser);

    const adminUser: AdminUser = {
        name: 'Belly',
        role: 'admin'
    };
    // console.log(adminUser);
    getUser(adminUser);

    // practice

    type Student = {
        name: string,
        contactNo: string;
    };

    type Teacher = {
        name: string,
        contactNo: string,
        designation: 'professor';
    };

    const findUser = (user: Student | Teacher) => {
        if ('designation' in user) {
            console.log(`My name is ${user.name}. My contact number is ${user.contactNo} and i am a ${user.designation}.`);
        }
    };


    const teacher: Teacher | Student = {
        name:'Muhammad',
        contactNo:'01849527226',
        designation:"professor"
    }
    findUser(teacher)















}