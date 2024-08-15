# Part 1 : Quizz :
# Answer the following questions:

# What is a class?
# Class in OOP serves as a mold or template for objects that are created as instances from a particular class. Classes typcally group variables and functions (methods) that are connected to them. Their instances (objects) have access to them.

# What is an instance?
# An instance is an object created from a particular class, e.g. from class Car that takes brand and model as arguments we can make an instance of Toyota Yaris.

# What is encapsulation?
# It is one of the 4 main principles in the OOP paradigm, it is the principle of building related data into a structured units and functions (methods) that can access and modify such data.

# What is abstraction?
# Another of the 4 main principles in OOP, this concept allows us to simplify all complex reality into manageable chunks. It also means that we don't need to understand the inner workings of a method, we simply need to know the input and output and can treat it like a blackbox and still be able to use it efficiently.

# What is inheritance?
# Another of the 4 main principles in OOP, objects inherit their properties from the classes of which they are instances. Also a class can inherit properties and methods from parent (ancestor) classes, e.g. in a game classes Wizard, Warrior, Elf etc. can all inherit from a class Character which can inherit from class User etc.

# What is multiple inheritance?
# It is inheritance from multiple classes at the same time, e.g. class Chair(Furniture, Equipment) inherits from two classes at the same time.

# What is polymorphism?
# Last of the 4 main principles in OOP, two instances of the same class can behave differently using the same methods based on their particular characteristics.

# What is method resolution order or MRO?
# It is a concept that deals with priorities or chain of importance in multiple inheritance.



# Part 2: Create a deck of cards class
import random

class Card:
    def __init__(self, suit:str, value:str):
        if suit in ["Hearts", "Diamonds", "Clubs", "Spades"]:
            self.suit = suit
        else:
            raise Exception("not a valid card suit")
        if value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]:
            self.value = value
        else:
            raise Exception("not a valid card value")

# making all 52 card objects
all_cards = []
for suite in ["Hearts", "Diamonds", "Clubs", "Spades"]:
    for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]:
        card = Card(suite, value)
        all_cards.append(card)

class Deck:
    def __init__(self, cards):
        self.cards = cards
    
    def shuffle(self):
        return random.shuffle(self.cards)

    def deal(self):
        card_dealt = random.choice(self.cards)
        self.cards.remove(card_dealt)
        return card_dealt


new_deck = Deck(all_cards)

# testing functions of new_deck
new_deck.shuffle()
card = new_deck.deal()

print(card.value, card.suit)
print("-----")
for card in new_deck.cards:
    print(card.value, card.suit)
