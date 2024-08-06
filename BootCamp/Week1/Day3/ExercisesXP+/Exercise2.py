# data set from external resource
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# calculating total sales and saving in a dictionary
total_sales = {}

for transaction in sales_data:
    product = transaction["product"]
    total_price = transaction["price"] * transaction["quantity"]
    if product in total_sales:
        total_sales[product] += total_price
    else:
        total_sales[product] = total_price

# spending profile of customers
customer_spending = {}

for transaction in sales_data:
    customer_id = transaction["customer_id"]
    total_price = transaction["price"] * transaction["quantity"]
    if customer_id in customer_spending:
        customer_spending[customer_id] += total_price
    else:
        customer_spending[customer_id] = total_price

# enhancing customer sales data
for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

# sorting high value transactions
high_value_transactions = []
for transaction in sales_data:
    if transaction["total_price"] > 500:
        high_value_transactions.append(transaction["total_price"])

print(high_value_transactions)
high_value_transactions.sort(reverse=True)
print(high_value_transactions)

# calculating customer loyality
purchase_counter = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    if customer_id in purchase_counter:
        purchase_counter[customer_id] += 1
    else:
        purchase_counter[customer_id] = 1

print(purchase_counter)

# bonus 1
average_transaction_value = {}
for product in total_sales.keys():
    total_quantity = sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product)
    average_transaction_value[product] = total_sales[product] / total_quantity

print(average_transaction_value)

# bonus 2
product_quantities = {product: sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product) for product in set(transaction["product"] for transaction in sales_data)}
most_popular_product = max(product_quantities, key=product_quantities.get)

print(product_quantities)