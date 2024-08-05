basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# removing items from basket
basket.remove("Banana")
basket.remove("Blueberries")

# adding items to the basket
basket.append("Kiwi")
basket.insert(0, "Apples")

# counting "Apples" and storing the result to a varible apples_count
apples_count = basket.count("Apples")

# emptying the basket
for i in range(0, len(basket)):
    basket.pop()

# checking if the basket is really empty
print(basket)