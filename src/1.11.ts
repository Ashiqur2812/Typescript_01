{

    // ternary operator || optional chaining || nullish coalescing

    const age: number = 15;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('child');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });

    //  Nullish coalescing operator

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 });

    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            permanentAddress?: string;
        };
    };

    const user: User = {
        name: 'sarah',
        address: {
            city: 'ctg',
            road: 'Awesome road',
            presentAddress: 'ctg town'
        }
    };

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent Address';
    console.log({ permanentAddress });






}