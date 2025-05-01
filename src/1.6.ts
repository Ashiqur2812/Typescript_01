{
    // Learning Function
    // Normal Function
    // Arrow Function

    function add(a: number, b: number): number {
        return a + b;
    }
    console.log(add(2, 3));

    const addArrow = (a: number, b: number): number => a * b;

    // object --> function --> method

    const poorUser = {
        name: 'roy',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is ${this.balance + balance}`;
        }
    };

    const arr: number[] = [1, 4, 6, 8];
    const newArr: number[] = arr.map((e: number): number => e * e);







}
