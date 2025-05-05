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