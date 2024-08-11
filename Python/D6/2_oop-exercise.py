class BankAccount:
    def __init__(self, owner, balance=0):
        # Initialize the owner and balance attributes
        self.owner = owner
        self.balance = balance
        print(f"A new bank account has been initialized for {owner}.")
    
    def __repr__(self):
        return f"This account belongs to {self.owner} and the balance is {self.balance}."
    
    def deposit(self, amount):
        # Add the amount to the balance if it's positive, otherwise print an error
        if amount > 0:
            self.balance += amount
            print(f"You have successfully made a deposit of {amount}, the new balance is {self.balance}.")
        else:
            print("You need to deposit a positive number.")
    
    def withdraw(self, amount):
        # Subtract the amount from the balance if it's within the available funds, otherwise print an error
        if amount > self.balance:
            print("You have insufficient funds.")
        elif amount <= self.balance:
            self.balance -= amount
            print(f"You have withdrawn {amount}, your remaining balance is now {self.balance}.")
        else:
            print("You need to deposit a positive number.")
    
    def check_balance(self):
        # Print the current balance
        print(f"Your current balance is {self.balance}.")

# Usage Example
account = BankAccount("Alice")
account.deposit(100)
account.withdraw(30)
account.check_balance()
print(account)