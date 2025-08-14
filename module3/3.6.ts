{
    // getter and setter
    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // addDeposit(money: number) {
        //     return this._balance = this._balance + money;
        // }

        get balance() {
            return this._balance;
        }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // getBalance() {
        //     return this._balance;
        // }
    }

    class addAmount extends BankAccount {
        test() {
            this.name = this.name;
        }
    }

    const poorAccount = new BankAccount(2, 'sarah', 44500);
    poorAccount.deposit = 100;
    const myBalance = poorAccount.balance;
    console.log(myBalance);

}

// this is my first typescript