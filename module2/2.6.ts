{
    // constraints = to force

    const addCourseToStudent = <T extends { name: string, id: number, email: string; }>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        };
    };

    const student3 = addCourseToStudent({ id: 44, name: 'sarah', email: 'sarah@gmail.com', isMarried: false });
    console.log(student3);


    const student1 = addCourseToStudent<{
        id: number,
        name: string,
        email: string,
        devType: string;
    }>({
        id: 111,
        name: 'maria',
        email: 'maria@gmail.com',
        devType: 'MERN Stack Developer'
    });
    console.log(student1);

    const student2 = addCourseToStudent({
        id: 222,
        name: 'sarah',
        email: 'sarah@gmail.com',
        hasWatch: 'apple watch'
    });
    console.log(student2);
















}