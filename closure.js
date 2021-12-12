const bank = owner => {
    balance = 0;
    return amount => {
        // we can write it in this shortcut way
        balance += amount; // it means actually nothing but -> ( balance = balance + amount; )
        return balance;
    }
}

// pass parameter for "owner"
const ownerName = bank('MD Sanju');
// pass parameter for the parameter of the second function "amount"
const amountPut = ownerName(100);
console.log(amountPut);
// again call for new deposit the amount
const amountPut2nd = ownerName(75);
console.log(amountPut2nd);
// but we can't see the main bank balance, it needs to hide for the security purpose, this is the especially of using closure
const bankBalanceChecking = ownerName.balance;
console.log(bankBalanceChecking);
// but we can deposit and get deposit total again easily
const amountPut3rd = ownerName(25);
console.log(amountPut3rd);



// 
const bank2 = owner2 => {
    balance2 = 0;
    return {
        deposit: amount2 => {
            // balance2 = balance2 + amount2;
            balance2 += amount2;
            return balance2;
        },
        withdraw: amount2 => {
            // balance2 = balance2 - amount2;
            balance2 -= amount2;
            return balance2;
        }
    }
}

// pass 1st parameter
const ownerName2 = bank2('MD Sanju2');

// deposit
const amountPut2 = ownerName2.deposit(1000);
console.log(amountPut2);

const amountPut2nd2 = ownerName2.deposit(575);
console.log(amountPut2nd2);
// no work
const bankBalanceChecking2 = ownerName2.balance2;
console.log(bankBalanceChecking2);

const amountPut3rd2 = ownerName2.deposit(225);
console.log(amountPut3rd2);

// withdraw
console.log(ownerName2.withdraw(500));
console.log(ownerName2.withdraw(200));