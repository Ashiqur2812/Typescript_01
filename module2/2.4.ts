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










}