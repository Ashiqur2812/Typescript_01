{
    class Counter {
        static count: number = 0;
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }

    // const instance1 = new Counter();
    // console.log(Counter.increment());
    // console.log(Counter.increment());
    // console.log(Counter.increment());

    // const instance2 = new Counter();
    // console.log(Counter.decrement());
    // console.log(Counter.decrement());
    // console.log(Counter.decrement());

}


{
    class Counter {
        static count: number = 0;

        static increment() {
            return Counter.count = Counter.count + 2;
        }

        static decrement() {
            return Counter.count = Counter.count - 2;
        }
    }

    // const result = new Counter()
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());

    // const result1 = new Counter()
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.decrement());











}