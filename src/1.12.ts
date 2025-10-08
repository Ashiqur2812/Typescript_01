{
    //  nullable type / unknown

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('There is nothing to search');
        }
    };
    searchName('sarah');

    //  unknown type

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else {
            console.log('wrong input');
        }
    };

    getSpeedInMeterPerSecond(`1000 km^-1`);

    // never

    // const throwError = (msg: string): never => {
    //     throw new Error(msg);
    // };

    // throwError('This is an error. ok...');

    // function throwError1(msg: string): never {
    //     throw new Error(msg);
    // }

    // console.log(throwError1('this is never type error'));

    // infinite loop

    // function infiniteLoop(): never {
    //     while (true) {
    //         console.log('Running forever....');
    //     }
    // }
    // infiniteLoop()

    // unknown type

    let data: unknown;

    data = true;
    data = { name: 'Sarah' };
    data = 12,
        data = 'Sarah',
        console.log(data);

    if (typeof data === 'string') {
        console.log(data.toUpperCase().charAt(2));
    }

    function unknownType(str: unknown) {
        if (typeof str === 'string') {
            console.log(str.toUpperCase());
        } else if(typeof str === 'number'){
            console.log(str * str)
        }else if(typeof str === 'boolean'){
            console.log('This is boolean type')
        }else{
            console.log('This is the type that you wii not want')
        }
    }

    unknownType('Maria');
    unknownType(5);
    unknownType(true);

}

