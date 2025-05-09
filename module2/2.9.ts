{
    // conditional type
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string,
        car: string,
        ship: string;
        plane: string;
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<'car'>;

    type HasPlane = CheckVehicle<'plane'>;

















}

{
    // conditional type
    type A1 = number;
    type B1 = undefined;

    type X = A1 extends number ? true : false;

    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    };

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<''>;



}

{
    // Description: Create a function that takes a string and an optional boolean.
    // If the boolean is true or not provided, return the string in uppercase.
    // If the boolean is false, return the string in lowercase.

    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }
    console.log(formatString('hello', false));
    console.log(formatString('hello', true));
}
{

    // Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

    // const books = [
    //     { title: "Book A", rating: 4.5 },
    //     { title: "Book B", rating: 3.2 },
    //     { title: "Book C", rating: 5.0 }
    // ];

    function filterByRating(items: { title: string; rating: number; }[]): { title: string; rating: number; }[] {
        const res1 = items.filter(e => e.rating >= 4);
        return res1;
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    console.log(filterByRating(books));


    // Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return Array.prototype.concat(...arrays);
    }

    console.log(concatenateArrays(["a", "b"], ["c"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));

}
{

    // Create a Vehicle class with private make and year properties and a getInfo() method.
    // Create a Car class extending Vehicle, adding a private model property and a getModel() method.

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
        getInfo(): void {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        getModel(): void {
            console.log(`Model: ${this.model}`);
        }

    }


    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    myCar.getModel();  // Output: "Model: Corolla"



    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        } else {
            return value * 2;
        }
    }
    console.log(processValue("hello"));
    console.log(processValue(10));


    interface Product {
        name: string;
        price: number;
    }

    // function getMostExpensiveProduct(products: Product[]): Product | null {
    //     return products.reduce((previous, current) => current.price > previous.price ? current : previous, products[0]);
    // }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        const result = products.sort((a, b) => a.price - b.price);
        console.log(result);
        return result[0];
    }
    


    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    console.log(getMostExpensiveProduct(products));

    //     Define an enum Day for the days of the week.
    // Create a function that returns "Weekday" or "Weekend" based on the input day.
    //         Enum & Function Signature:

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day === Day.Monday ||
            day === Day.Tuesday ||
            day === Day.Wednesday ||
            day == Day.Thursday ||
            day === Day.Friday ||
            day === Day.Saturday) {
            return 'Weekday';
        } else {
            return 'Weekend';
        }
    }


    console.log(getDayType(Day.Monday));   // Output: "Weekday"
    console.log(getDayType(Day.Sunday));   // Output: "Weekend"
    console.log(getDayType(Day.Saturday));   // Output: "Weekday"






}