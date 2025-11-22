{

    // type assertion
    let anything: any;

    anything = 'Next level web development';
    anything = true;

    anything = 222;
    (anything as number);

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    };

    const result1 = kgToGm(1000) as number;
    console.log(result1);
    const result2 = kgToGm('5') as string;
    console.log(result2);

    type CustomError = {
        message: string;
    };

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }

}

{

    let anything: any;

    anything = 'Next level web development';
    anything = true;

    anything = 222;
    (anything as number).toString();
    console.log(anything);

    const kgToGm = (value: string | number): number | string | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    };

    const result = kgToGm(321) as number;
    const test = kgToGm('42') as string;
    console.log(result);
    console.log(test);

    type CustomError = {
        message: string;
    };

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }


}

{
    let anything: any;
    anything = 'Software Engineer';

    anything = 234;
    (anything as number);

    anything = 'sarah';
    (anything as string);

    const gmToKg = (value: number | string) => {
        if (typeof value === 'string') {
            const convertedValue = (parseFloat(value) / 1000).toFixed(2);
            return `Final value is = ${convertedValue} kg`;
        } else if (typeof value === 'number') {
            return parseFloat((value / 1000).toFixed(2));
        }
    };

    const res = gmToKg('3555' as string);
    const res2 = gmToKg(3555 as number);
    console.log('-->', typeof res);
    console.log(res);
    console.log('-->', typeof res2);
    console.log(res2);

    type CustomError = {
        message: string;
    };

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }

}