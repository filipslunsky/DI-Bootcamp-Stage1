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


# PART III - updated previous parts
# test of part III
test_account = BankAccount(1000, "filip", "1234")
print(test_account.authenticated)

test_account.authenticate("filip", "12345")
print(test_account.authenticated)

test_account.authenticate("filip", "1234")
print(test_account.authenticated)

test_account.deposit(200)

# PART IV - BONUS
class ATM:
    def __init__(self, account_list, try_limit):
        self.account_list = []
        for account in account_list:
            if account.isinstance(BankAccount):
                self.account_list.append(account)
        self.try_limit = 2
        if type(try_limit) != int:
            raise Exception("you need to input a number for try limit")
        elif try_limit <= 0:
            raise Exception("the number of try limit needs to be positive")
        else:
            self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()
    
    def show_main_menu(self):
        while True:
            menu_choice = input("Do you want to (l)og in or (e)xit? ")
            if menu_choice == "l":
                self.log_in(self)
                break
            elif menu_choice == "e":
                break
            else:
                continue
    

