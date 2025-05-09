{
    // constraints = to force

    interface AddCourseToStudent {
        name: string,
        id: number,
        email: string;
    }

    const addCourseToStudent = <T extends AddCourseToStudent>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        };
    };

    const student3 = addCourseToStudent({ id: 44, name: 'sarah', email: 'sarah@gmail.com', isMarried: false });
    console.log(student3);

    interface Student1 {
        id: number,
        name: string,
        email: string,
        devType: string;
    }


    const student1 = addCourseToStudent<Student1>({
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

{
    interface One {
        name: string,
        isMarried: boolean,
        address: string;
    }

    const addToCourseStudent = <T extends One>(student: T) => {
        const course = 'Next Level Web Development';
        return {
            ...student,
            course
        };
    };

    const student = addToCourseStudent({
        name: 'Stan',
        isMarried: true,
        address: 'Dhaka'
    });
    console.log(student);

    const Teacher = addToCourseStudent({
        name: 'Miller',
        isMarried: false,
        address: 'South Africa'
        
    });















}