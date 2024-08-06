# Yossi, Eik, 53230, Bank HaPoalim, Tel AViv

# Ben, Benji, 42343, Leumi, Raanana

account1 = {
    "First Name": "Yossi",
    "Last Name": "Eik",
    "ID Name": "53230",
    "Bank": "Bank HaPoalim",
    "Address": "Tel Aviv"
}

account2 = {
    # "First Name": "Ben",
    "Last Name": "Benji",
    "ID Name": "42343",
    "Bank": "Leumi",
    "Address": "Raanana"
}

accounts = [account1, account2]

# for account in accounts:
#     first_name = account["First Name"]
#     print(first_name)
# now will return error because account2 has no "First Name"

# if we use .get(), it will return default value "None"
for account in accounts:
    first_name = account.get("First Name")
    print(first_name)

