class Bank_Account:
    total_accounts = 0
    all_accounts = []
    interest_rate = 0.03

    def __init__(self, account_type, initial_balance = 0):
        self._balance = initial_balance
        self.account_type = account_type
        self.total_accounts += 1
        self.account_number = self.total_accounts + 1
        
        self.account_details = {}
        self.account_details["account_number"] = self.account_number
        self.account_details["account_type"] = self.account_type
        self.account_details["balance"] = self.balance
        self.account_details["interest_rate"] = self.interest_rate
        
        self.all_accounts.append(self.account_details)
    
    @property
    def balance(self):
        pass
    
    @classmethod
    def get_total_accounts(cls):
        return cls.total_accounts
    
    @classmethod
    def find_accounts_by_number(cls, account_number):
        for account in cls.all_accounts:
            if account_number == cls.all_accounts["account_number"]:
                return f"The account number {account_number} is a {account["account_type"]} and the balance is {account["balance"]}."
            else:
                return "This account doesn't exist."
        
    @classmethod
    def total_balances(cls):
        result = 0
        for account in cls.all_accounts:
            result += account["balance"]
        return result
    
    def deposit(self, amount):
        if amount < 0:
            return "You cannot deposit a negative number"
        else:
            self.balance += amount
            return f"You have successfully deposited {amount} in your account."

    

    


        
