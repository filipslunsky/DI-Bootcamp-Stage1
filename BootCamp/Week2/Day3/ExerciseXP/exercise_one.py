# Exercise 1 - Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __repr__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        else:
            return f"{self.amount} {self.currency}s"
    
    def __str__(self):
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        else:
            return f"{self.amount} {self.currency}s"
    
    def __int__(self):
        return self.amount
    
    def __float__(self):
        return self.amount
    
    def __add__(self, other):
        if type(other) == int or type(other) == float:
            self.amount += other
            return self.amount
        elif self.currency == other.currency:
            self.amount += other.amount
            return self.amount
        else:
            raise TypeError(f"Cannot add between {self.currency} and {other.currency}.")
    
    def __iadd__(self, other):
        self.amount = self.__add__(other)
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))

print(int(c1))

print(repr(c1))

print(c1 + 5)

print(c1 + c2)

print(c1)

c1 += 5
print(c1)

print(c1 + c2)

try:
    print(c1 + c3)
except Exception as e:
    print(e)

# Exercise 2 - Import
from func import add_numbers

add_numbers(4, 5)

# Exercise 3 - String module
import random
import string

letters = string.ascii_letters

random_string = ''.join(random.choice(letters) for i in range(5))

print(random_string)

# Exercise 4 - Current Date
import datetime

def get_current_date():
    date = datetime.datetime.now()
    print(date.strftime("%x"))

get_current_date()

# Exercise 5 Amount of time left until January 1st
def get_time_until_next_year():
    current_time = datetime.datetime.now()
    next_year = int(current_time.strftime("%Y")) + 1

    next_january = datetime.datetime(next_year, 1, 1)

    remaining = next_january - current_time

    days = remaining.days

    hours, remainder = divmod(remaining.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    total_minutes = days * 24 * 60 + hours * 60

    print(f"The remaining amount of time until next year is {days} days, {hours} hours and {minutes} minutes.")
    print(f"Which amounts to {total_minutes} minutes.")

get_time_until_next_year()

# Exercise 6 : Birthday and minutes
def get_minutes_lived(year:int, month:int, day:int):
    birthdate = datetime.datetime(year, month, day)

    now = datetime.datetime.now()

    time_lived = now - birthdate
    days = time_lived.days
    hours, remainder = divmod(time_lived.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    total_minutes = days * 24 * 60 + hours * 60 + minutes


    print(f"You have been alive for {total_minutes} minutes.")

get_minutes_lived(1986, 4, 30)

# Exercise 7 - Faker Module
from faker import Faker
fake = Faker()
users = []

for i in range(10):
    user = {}
    user["name"] = fake.name()
    user["address"] = fake.address()
    user["language_code"] = fake.language_code()
    users.append(user)

print(users)
