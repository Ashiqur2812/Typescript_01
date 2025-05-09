{
    // promise

    interface Todo {
        id: number,
        userId: number,
        title: string,
        completed: boolean;
    }

    const getToDo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        return data;
    };

    getToDo();

    interface Something { something: string; };

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' };
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        });
    };

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        console.log(data);
        return data;
    };

    showData();

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const data = await res.json();
        console.log(data);
        return data;
    };
    fetchData();

    const getPromise = (): Promise<{ fine: string; }> => {
        return new Promise<{ fine: string; }>((resolve, reject) => {
            const data: { fine: string; } = { fine: 'fine' };
            if (data) {
                resolve(data);
            } else {
                reject(data);
            }
        });
    };

    const getData = async (): Promise<{ fine: string; }> => {
        const data: { fine: string; } = await getPromise();
        console.log(data);
        return data;
    };
    getData();

    // three

    interface Task {
        userId: number,
        id: number,
        title: string,
        completed: boolean;
    }

    const myData = async (): Promise<Task> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/3');
        const data = await res.json();
        console.log(data);
        return data;
    };

    myData();

    interface Take { take: string; }

    const getFound = (): Promise<Take> => {
        return new Promise<Take>((resolve, reject) => {
            const data: Take = { take: 'take' };
            if (data) {
                resolve(data);
            } else {
                reject('This is web development');
            }
        });
    };

    const getResult = async (): Promise<Take> => {
        const data: Take = await getFound();
        console.log(data);
        return data;
    };

    getResult();













}

{
    const getPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'sarah';
            if (data) {
                resolve(data);
            } else {
                resolve('To err is human');
            }
        });
    };

    const showData = async (): Promise<string> => {
        const data: string = await getPromise();
        return data;
    };

    interface One {
        something: string;
    }

    const getFunction = (): Promise<One> => {
        return new Promise<One>((resolve, reject) => {
            const data: One = { something: 'something' };
            if (data) {
                resolve(data);
            } else {
                reject('Error is mistake');
            }
        });
    };

    const showFunction = async () => {
        const data: One = await getFunction();
        return data;
    };

    showFunction();

    interface Todo { userId: number, id: number, title: string, completed: boolean; }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/4');
        const data = await res.json();
        console.log('-->', data);
        console.log('-->', data.title);
        return data;
    };

    getTodo();

}

{
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject('Negative Number not allowed');
            } else {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
        });
    }

    squareAsync(3).then(console.log);       // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed










}