{
    // Destructuring

    const user = {
        id: 3,
        name: {
            firstName: 'jason',
            middleMan: 'roy',
            lastName: 'fine'
        },
        contactNo: '01648800705',
        address: 'Bangladesh'
    };

    const { contactNo, name: { middleMan } } = user;

    // array destructuring

    const myFriends = ['sarah', 'ross', 'joy', 'maria', 'hafsa', 'stuart'];

    const [, , bestFriend, ...rest] = myFriends;

}
