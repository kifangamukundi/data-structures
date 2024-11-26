// Service Interface
class ATMMachine {
    withdrawCash(amount) {}
    getBalance() {}
  }
  
  // Real Service Class - ATMMachine Implementation
  class ATMMachineImpl extends ATMMachine {
    constructor() {
      super();
      this.balance = 0;
    }
  
    withdrawCash(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`ATMMachineImpl: Withdrew $${amount} from the account.`);
      } else {
        console.log("ATMMachineImpl: Insufficient funds.");
      }
    }
  
    getBalance() {
      console.log(`ATMMachineImpl: Account balance is $${this.balance}.`);
    }
  }
  
  // Real Service Class - BankAccount
  class BankAccountService extends ATMMachine {
    constructor(accountNumber) {
      super();
      this.accountNumber = accountNumber;
      this.balance = 500;
    }
  
    withdrawCash(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`BankAccountService: Withdrew $${amount} from account ${this.accountNumber}.`);
      } else {
        console.log(`BankAccountService: Insufficient funds in account ${this.accountNumber}.`);
      }
    }
  
    getBalance() {
      console.log(`BankAccountService: Account ${this.accountNumber} balance is $${this.balance}.`);
    }
  }
  
  // Proxy Class - RemoteATMMachineProxy
  class RemoteATMMachineProxy extends ATMMachine {
    constructor() {
      super();
      this.realService = null;
    }
  
    connectToATMMachine() {
      console.log("RemoteATMMachineProxy: Connecting to the real ATM machine remotely.");
      this.realService = new ATMMachineImpl();
    }
  
    connectToBankAccount(accountNumber) {
      console.log(`RemoteATMMachineProxy: Connecting to bank account ${accountNumber} remotely.`);
      this.realService = new BankAccountService(accountNumber);
    }
  
    withdrawCash(amount) {
      if (!this.realService) {
        this.connectToBankAccount("123456789"); // Connect to a specific bank account
      }
      console.log("RemoteATMMachineProxy: Authenticating user remotely.");
      this.realService.withdrawCash(amount);
    }
  
    getBalance() {
      if (!this.realService) {
        this.connectToBankAccount("123456789"); // Connect to a specific bank account
      }
      console.log("RemoteATMMachineProxy: Authenticating user remotely.");
      this.realService.getBalance();
    }
  }
  
  // Client Code
  function useATMMachine(atmMachine, amount) {
    atmMachine.withdrawCash(amount);
    atmMachine.getBalance();
  }
  
  // Usage
  const atmProxy = new RemoteATMMachineProxy();
  useATMMachine(atmProxy, 50);
  