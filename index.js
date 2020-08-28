/*
BANK:
- create:
    bank account (name, surname, account number, money)
- read:
    list all accounts
- update:
    deposit/withdraw money to/from account
    can not withdraw more than have
- delete:
    only if, 0 balance in account
*/

let bank = [];

const createAccount = (name, surname) => {
    bank.push({
        name: name,
        surname: surname,
        account: 'LT' + Math.floor(Math.random() * 100000000000),
        money: 0
    });
}

const findAccountIndex = (accountID) => {
    for (let i = 0; i < bank.length; i++) {
        if (bank[i].account === accountID) {
            return i;
        }
    }
}

const updateAccount = (accountID, money) => {
    let accountIndex = findAccountIndex(accountID);

    if (money > 0) {
        console.log('DEPOSIT:', accountID, money);
    } else {
        console.log('WITHDRAW:', accountID, money);
        if (bank[accountIndex].money + money < 0) {
            console.warn('WARN: can not withdraw money - not enough in the balance.');
            return;
        }
    }

    bank[accountIndex].money += money;
}

const listAccounts = () => {
    console.log('\n--== BANK ACCOUNTS ==--');
    for (const acc of bank) {
        console.log('Account %s(%s) has %s money.', acc.account, acc.name, acc.money);
    }
}

const deleteAccount = (accountID) => {
    let accountIndex = findAccountIndex(accountID);

    if (bank[accountIndex].money > 0) {
        console.warn('WARN: could not delete account - non empty balance.');
    } else {

        let newAccounts = [];
        for (const acc of bank) {
            if (acc.account !== accountID) {
                newAccounts.push(acc);
            }
        }
        bank = newAccounts;
    }
}

createAccount('Vardenis', 'Pavradenis');
createAccount('Johny', 'Bravo');
createAccount('Xena', 'Warrior Princes');

updateAccount(bank[1].account, 88);
updateAccount(bank[1].account, -100);
updateAccount(bank[0].account, 5);
updateAccount(bank[2].account, 81321315);
updateAccount(bank[0].account, -5);
updateAccount(bank[1].account, -88);
updateAccount(bank[2].account, -81321315);

listAccounts();

deleteAccount(bank[0].account);
deleteAccount(bank[0].account);
deleteAccount(bank[0].account);

listAccounts();