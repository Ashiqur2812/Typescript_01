{
    // utility type
    // Pick
    type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo: string;
    };

    type NameAge = Pick<Person, 'name' | 'age'>;

    // Omit

    type ContactInfo = Omit<Person, 'name' | 'age'>;

    // Required
    type PersonRequired = Required<Person>;

    // Partial

    type PersonPartial = Partial<Person>;

    // readonly
    type PersonReadonly = Readonly<Person>;

    const person1: Person = {
        name: 'sarah',
        age: 23,
        contactNo: '01648800705'
    };

    // Record type
    // type MyObj = {
    //     a: string,
    //     b: string;
    // };

    type MyObj = Record<string, string>;

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'sarah'
    };
    console.log(obj1);

    const emptyObj: Record<string, unknown> = {};

}

// I am learning typescript 