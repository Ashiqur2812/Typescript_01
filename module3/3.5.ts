{
    // access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this.name = this.name;
            this._balance = this._balance;
        }
    }


    const poorAccount = new BankAccount(111, 'sarah', 20000);
    console.log(poorAccount.getBalance());
    console.log(poorAccount.addDeposit(30));

}
// practice ---->
{
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposit(amount: number) {
            return this.balance = this.balance + amount;
        }
        getDeposit() {
            return this.balance;
        }
    }

    class Student extends BankAccount {
        test() {
            this.balance;
            this.name;
        }
    }
    const result = new BankAccount(22, 'sarah', 200);
    console.log(result.getDeposit());
    console.log(result.addDeposit(20));

}

{
    // access modifier
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(amount: number) {
            return this._balance = this._balance + amount;
        }

        getDeposit() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            return this._balance
        }
    }

    const three = new StudentAccount(420, 'sarah', 2812);
    console.log(three.test())

    const poorAccount = new BankAccount(12, 'mafia', 333);
    const one = poorAccount.getDeposit();
    console.log(one);
    const two = poorAccount.addDeposit(33);
    console.log(two);



}

// this is typescript 