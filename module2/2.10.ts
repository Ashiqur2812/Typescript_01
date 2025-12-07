{
    // mapped types
    const arrOfNumbers: number[] = [1, 3, 5];
    const arrOfStrings: string[] = arrOfNumbers.map(num => num.toString());
    console.log(arrOfStrings);


    type AreaNumber = {
        height: number,
        width: number;
    };

    type Height = AreaNumber['height']; // lookup type



    type AreaString<T> = {
        [key in keyof T]: T[key]
    };

    type Measure = {
        height: string,
        width: number;
    };


    const area1: AreaString<Measure> = {
        height: '100',
        width: 50
    };
    console.log(area1);

    const area2: AreaString<{ height: number, width: string; }> = {
        height: 23,
        width: '23'
    };
    console.log(area2);

    type AreaNum<T> = {
        [key in keyof T]: T[key]
    };

    interface Value {
        time: number,
        day: string;
    }

    const result1: AreaNum<Value> = {
        time: 12,
        day: 'sunday'
    };
    console.log(result1);

}

{
    const arrayOfNumber: number[] = [1, 3, 6];
    // const arrayOfString:string[] = ['1','3','5']
    const arrayOfStrings: string[] = arrayOfNumber.map(e => e.toString());
    console.log(arrayOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };

    type AreaString = {
        height: string;
        width: string;
    };

    type String<T> = {
        [key in keyof T]: T[key]
    };

    const area1: String<{ height: string; width: number; }> = {
        height: '100',
        width: 40
    };

    type Height = AreaNumber['height'];


}
