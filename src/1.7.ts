{

    //  spread operator
    //  rest operator
    //  destructuring

    const bros1: string[] = ['roy', 'stuart', 'sarah'];

    const bros2: string[] = ['maria', 'fable', 'fine'];
    bros1.push(...bros2);

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };

    const mentor2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };

    const mentorsList = {
        ...mentors1,
        ...mentors1
    };


    //  Rest operator

    const greetFriends = (friend1: string, friend2: string, friend3: string) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    };

    greetFriends('Ashiq', 'murad', 'rana');


    const warmFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    };

    warmFriends('sarah', 'kabul', 'roy', 'stuart', 'belly');



}

