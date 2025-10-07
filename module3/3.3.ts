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
        name: 'Muhammad',
        contactNo: '01849527226',
        designation: "professor"
    };
    findUser(teacher);

}

{
    //type guard 

    const add = (param1: string | number, param2: string | number): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + ' & ' + param2.toString();
        }
    };

    const result = add(12, 'This is Ashiqur Rahman');
    console.log(result);

    // in guard

    interface NormalUser {
        name: string;
        age: number;
    }
    interface AdminUser {
        name: string;
        age: number;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`This is ${user.name}. I am ${user.age} years old. I am an ${user.role}`);
        }
    };

    const teacher: NormalUser | AdminUser = {
        name: 'sarah',
        age: 25,
        role: "admin"
    };
    console.log(teacher);

    interface One {
        name: string;
        age: number;
    }

    interface Two {
        name: string;
        age: number;
        role: 'agent' | 'admin';
    }

    const getFunction = (user: One | Two) => {
        if ('role' in user) {
            console.log(`This is ${user.name}. He is ${user.age} years old. He is an ${user.role}.`);
        }
    };

    const one: One | Two = {
        name: 'cool',
        age: 29,
        role: "agent"
    };

    getFunction(one);


}

// I am learning typescript 


