# case number 1
# data from external source
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

# converting strings to integers
wallet = wallet.replace("$","")
wallet = int(wallet)

for key in items_purchase:
    items_purchase[key] = items_purchase[key].replace("$","")
    if "," in items_purchase[key]:
        items_purchase[key] = items_purchase[key].replace(",","")
    items_purchase[key] = int(items_purchase[key])

# checking what can be bought with the money in the wallet
affordable_items = []

for key in items_purchase:
    if items_purchase[key] < wallet:
        affordable_items.append(key)

# printing and convertin the result
affordable_items = sorted(affordable_items)
print(affordable_items)

# as a proof of concept using the same process on case number 2 and 3
# example 2

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100"

# converting strings to integers
wallet = wallet.replace("$","")
wallet = int(wallet)

for key in items_purchase:
    items_purchase[key] = items_purchase[key].replace("$","")
    if "," in items_purchase[key]:
        items_purchase[key] = items_purchase[key].replace(",","")
    items_purchase[key] = int(items_purchase[key])

# checking what can be bought with the money in the wallet
affordable_items = []

for key in items_purchase:
    if items_purchase[key] < wallet:
        affordable_items.append(key)

# printing and convertin the result
affordable_items = sorted(affordable_items)
print(affordable_items)

# example 3
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1"

# converting strings to integers
wallet = wallet.replace("$","")
wallet = int(wallet)

for key in items_purchase:
    items_purchase[key] = items_purchase[key].replace("$","")
    if "," in items_purchase[key]:
        items_purchase[key] = items_purchase[key].replace(",","")
    items_purchase[key] = int(items_purchase[key])

# checking what can be bought with the money in the wallet
affordable_items = []

for key in items_purchase:
    if items_purchase[key] < wallet:
        affordable_items.append(key)

# printing and convertin the result
affordable_items = sorted(affordable_items)
print(affordable_items)
