sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Removing Patrami Sandwich
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Finishing sandwiches
finished_sandwiches = []

while len(sandwich_orders) > 0:
    i = 0
    finished_sandwiches.append(sandwich_orders[i])
    sandwich_orders.remove(sandwich_orders[i])
    i += 1

# Letting the customers know about their orders
for i in range(0, len(finished_sandwiches)):
    print(f"I made your {finished_sandwiches[i].lower()}")