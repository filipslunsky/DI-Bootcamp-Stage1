class BankAccount:
    # Class attributes to track total accounts, all accounts, and a default interest rate
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.03  # 3% interest rate for savings accounts

    def __init__(self, account_type: str, initial_balance: float = 0.0):
        self._balance = initial_balance
        self.account_type = account_type
        self.transaction_history = []
        self.account_number = BankAccount.total_accounts + 1
        BankAccount.total_accounts += 1
        BankAccount.all_accounts.append(self)

    @property
    def balance(self):
        """Provides read-only access to the account balance."""
        return self._balance

    @property
    def account_type(self):
        """Getter for account_type. Ensures the account type is valid."""
        return self._account_type

    @account_type.setter
    def account_type(self, value):
        """Setter for account_type. Validates the account type before setting it."""
        if not BankAccount.validate_account_type(value):
            raise ValueError("Invalid account type. Must be 'savings' or 'checking'.")
        self._account_type = value

    @classmethod
    def get_total_accounts(cls):
        """Returns the total number of accounts created."""
        return cls.total_accounts

    @classmethod
    def find_account_by_number(cls, account_number):
        """Finds and returns an account by its account number."""
        for account in cls.all_accounts:
            if account.account_number == account_number:
                return account
        return None

    @classmethod
    def total_balances(cls):
        """Returns the sum of balances across all accounts."""
        return sum(account.balance for account in cls.all_accounts)

    @staticmethod
    def validate_account_type(account_type):
        """Validates the account type to ensure it's either 'savings' or 'checking'."""
        return account_type in ["savings", "checking"]

    def deposit(self, amount):
        """Adds money to the account and logs the transaction."""
        if amount > 0:
            self._balance += amount
            self.transaction_history.append(f"Deposited: ${amount}")
        else:
            raise ValueError("Deposit amount must be positive.")

    def withdraw(self, amount):
        """Withdraws money from the account if the balance allows, and logs the transaction."""
        if amount > self._balance:
            raise ValueError("Insufficient balance.")
        self._balance -= amount
        self.transaction_history.append(f"Withdrew: ${amount}")

    def apply_interest(self):
        """Applies interest to savings accounts and logs the interest application."""
        if self._account_type == "savings":
            self._balance += self._balance * BankAccount.interest_rate
            self.transaction_history.append(f"Interest applied at rate: {BankAccount.interest_rate * 100}%")

# Example Usage
if __name__ == "__main__":
    # Create bank accounts
    account1 = BankAccount("savings", 1000)
    account2 = BankAccount("checking", 500)
    account3 = BankAccount("savings", 2000)

    # Deposit and withdraw money
    account1.deposit(300)
    account2.withdraw(200)

    # Apply interest to the savings accounts
    account1.apply_interest()
    account3.apply_interest()

    # Find account by account number
    found_account = BankAccount.find_account_by_number(2)
    if found_account:
        print(f"Found account #{found_account.account_number} with balance: ${found_account.balance}")

    # Display total balances across all accounts
    print(f"Total balances across all accounts: ${BankAccount.total_balances()}")

    # Display total accounts created
    print(f"Total accounts created: {BankAccount.get_total_accounts()}")
