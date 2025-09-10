{
    // Destructuring

    type User = {
        id: number,
        name: {
            firstName: string,
            middleName: string,
            lastName: string,
            money: {
                activeMoney: number,
                passiveMoney: number;
            };
        },
        contactNo: string,
        address: string;
    };

    const user: User = {
        id: 3,
        name: {
            firstName: 'jason',
            middleName: 'roy',
            lastName: 'fine',
            money: {
                activeMoney: 30000,
                passiveMoney: 50000
            }
        },
        contactNo: '01648800705',
        address: 'Bangladesh'
    };


    const { name: { middleName, money: { activeMoney } } } = user;
    console.log(middleName);
    console.log(activeMoney);

    // const { contactNo, name: { middleMan } } = user;

    // array destructuring

    const myFriends = ['sarah', 'ross', 'joy', 'maria', 'fine', 'stuart'];

    const [, , bestFriend, ...rest] = myFriends;

    // rest operator

    function friends(...c: number[]) {
        console.log(c);
        c.forEach((e: number): void => console.log(e));
    }

    friends(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    type Role = "user" | "admin" | "moderator" | 'agent';
    let userRole: Role = "agent";
    console.log(userRole);

    type Name = 'sarah' | 'maria';
    let name: Name = 'sarah';
    console.log(name);

    type Users = {
        name: string,
        age: number,
        isAdmin?: string;
    };

    const users: Users = {
        name: 'sarah',
        age: 30
    };
    console.log({ users });
    console.log(users);

    type Name1 = { name: string; };
    type Age = { age: number; };

    type Person = Name1 & Age;

    const user2: Person = {
        name: "sarah",
        age: 25,
    };

    console.log(user2);

    // Intersection Type

    type Employee = {
        empId: number,
        department: string;
    };

    type Admin = {
        role: 'admin' | 'agent' | 'user',
        accessLevel: number;
    };

    type Result = Employee & Admin;

    const result: Result = {
        empId: 23,
        department: 'Sociology',
        role: 'admin',
        accessLevel: 5
    };

    console.log(result);


}
