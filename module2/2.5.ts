{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param];
    };

    const result1 = createArray('Bangladesh');
    console.log(result1);

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const resGeneric = createArrayWithGeneric<string>('Australia');
    console.log(resGeneric);

    interface User1 { id: number, name: string; }

    const resGenericObject = createArrayWithGeneric<User1>({
        id: 222,
        name: 'sarah'
    });
    console.log(resGenericObject);

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const result2 = createArrayWithTuple<string, boolean>('China', true);
    console.log(result2);

    const result3 = createArrayWithTuple<string, { name: string; }>('Japan', { name: 'Asia' });
    console.log(result3);

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        };
    };

    const student1 = addCourseToStudent({
        name: 'maria',
        email: 'maria@gmail.com',
        devType: 'MERN Stack Developer'
    });
    console.log(student1);

    const student2 = addCourseToStudent({
        name: 'sarah',
        email: 'sarah@gmail.com',
        hasWatch: 'apple watch'
    });
    console.log(student2);







}