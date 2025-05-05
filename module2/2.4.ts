{
    // generic interface

    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X;
    }

    interface poorDev {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<poorDev> = {
        name: 'sarah',
        computer: {
            brand: 'ASUS',
            model: 'X-245',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'Eab',
            model: 'usi4',
            display: 'OLE'
        }
    };
    console.log(poorDeveloper);

    type RichDev = {
        brand: string;
        model: string;
        heartBeat: boolean;
        sleepTrack: boolean;
    };

    interface RichBike {
        brand: string,
        speed: string;
    }

    const richDeveloper: Developer<RichDev, RichBike> = {
        name: 'maria',
        computer: {
            brand: 'Apple',
            model: 'Y-78',
            releaseYear: 2024
        },
        smartWatch: {
            brand: 'apple watch',
            model: '45-XY',
            heartBeat: true,
            sleepTrack: true
        },
        bike: {
            brand: 'yamaha',
            speed: '200cc'
        }
    };
    console.log(richDeveloper);

    interface Engineer<T, X = null> {
        name: string,
        email: string,
        degree: 'cse' | 'eee' | 'cs',
        designation: string,
        address: {
            presentAddress: string,
            permanentAddress: string,
            isMarried: boolean;
        },
        bike: T,
        car?: X;
    }

    interface Data {
        brand: string,
        model: string,
        isNew: boolean;
    }

    interface PoorCar {
        name: string,
        weight: string,
        color: 'red' | 'white' | 'black' | 'navy';
    }

    const poorEngineer: Engineer<Data, PoorCar> = {
        name: 'sarah',
        email: 'sarah@gmail.com',
        degree: "cse",
        designation: 'Computer Engineer',
        address: {
            presentAddress: 'Rajshahi',
            permanentAddress: 'Dhaka',
            isMarried: false
        },
        bike: {
            brand: 'suzuki',
            model: 's10',
            isNew: true
        },
        car: {
            name: 'odi',
            weight: '250kg',
            color: "black"
        }
    };
    console.log(poorEngineer)










}