// Reference Type --> Object

const user : {
    firstName : string,
    middleName?: string, // optional type
    lastName: string,
    learn: 'programming Hero', // literal types
    isMarried: boolean,
    readonly company: string
} = {
    firstName: 'Muhammad',
    // middleName: 'Jason',
    lastName: 'Roy',
    learn: 'programming Hero',
    isMarried: false,
    company: 'softvene agency'
}

// user.company = 'PH'
