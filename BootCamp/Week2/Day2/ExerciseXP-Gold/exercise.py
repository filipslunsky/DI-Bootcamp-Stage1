# PART I
class BankAccount:
    def __init__(self, balance, username, password):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False
    
    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
    
    def deposit(self, amount):
        if self.authenticated:
            if type(amount) == int:
                if amount >= 0:
                    self.balance += amount
                    print(f"deposited: {amount} dollars, total balance: {self.balance} dollars")
                else:
                    raise Exception("you cannot deposit negative number")
            else:
                raise Exception("the amount needs to be an integer")
        else:
            raise Exception("unauthenticated access")
    
    def withdraw(self, amount):
        if self.authenticated:
            if type(amount) == int:
                if amount >= 0:
                    self.balance -= amount
                    print(f"withdrew: {amount} dollars, total balance: {self.balance} dollars")
                else:
                    raise Exception("you cannot withdraw negative number")
            else:
                raise Exception("the amount needs to be an integer")
        else:
            raise Exception("unauthenticated access")


# PART II    
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance = 0):
        super().__init__(balance, username, password)
        self.balance = balance
        self.password = password
        self.balance = balance
        self.authenticated = False
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if self.authenticated:
            if type(amount) == int:
                if amount >= 0:
                    if self.balance - amount >= self.minimum_balance:
                        self.balance -= amount
                        print(f"withdrew: {amount} dollars, total balance: {self.balance} dollars, minimum balance is {self.minimum_balance}")
                    else:
                        print(f"You need to leave minimum balance of {self.minimum_balance} dollars")
                else:
                    raise Exception("you cannot withdraw negative number")
            else:
                raise Exception("the amount needs to be an integer")
        else:
            raise Exception("unauthenticated access")


# IV - BONUS
class ATM:
    def __init__(self, account_list, try_limit):
        self.account_list = []
        for account in account_list:
            if isinstance(account, BankAccount):
                self.account_list.append(account)
        if try_limit > 0:
            self.try_limit = try_limit
        else:
            raise Exception("the limit of tries needs to be a positive number")
        self.current_tries = 0
        self.show_main_menu()
    
    def show_main_menu(self):
        while True:
            print("YOUR ATM WELCOMES YOU")
            choice = input("Do you want to (l)og in or (e)xit? ")
            if choice == "l":
                while True:
                    username = input("What is your username? ")
                    for account in self.account_list:
                        if account.username == username:
                            while self.current_tries <= self.try_limit:
                                password = input("What is your password? ")
                                if account.password == password:
                                    self.log_in(username, password)
                                    break
                                else:
                                    print("wrong password")
                                    self.current_tries += 1
                            else:
                                print("Sorry, you have tried too many times, we are logging you out.")
                    break
                break
            elif choice == "e":
                print("Have a good day.")
                break


    def log_in(self, username, password):
        for account in self.account_list:
            if account.username == username:
                account.authenticate(username, password)
                self.show_account_menu(account)

    def show_account_menu(self, account):
        while True:
            print(f"What do you want to do today, {account.username}? ")
            choice = input("(w)ithdraw or (d)eposit or (e)xit? ")
            if choice == "w":
                amount = int(input("How much would you like to withdraw? "))
                account.withdraw(amount)
            elif choice == "d":
                amount = int(input("How much would you like to deposit? "))
                account.deposit(amount)
            elif choice == "e":
                print(f"It was pleasure to be doing business with you today, {account.username}")
                break



acc1 = BankAccount(1000, "joey", "jjj")
acc2 = BankAccount(1200, "ross", "rrr")
acc3 = BankAccount(1100, "monica", "mmm")
account_list = [acc1, acc2, acc3]

my_atm = ATM(account_list, 3)

