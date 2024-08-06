info1 = {
    "First Name": "Yossi",
    "Last Name": "Eik",
    
}

info2 = {
    "ID Name": "42343",
    "Bank": "Leumi",
    "Address": "Raanana"
}

info1.update(info2)

print(info1)

info3 = {
    "First Name": "Yossi",
    "Last Name": "Eik",
    
}

info4 = {
    "Last Name": "Benji",
    "ID Name": "42343",
    "Bank": "Leumi",
    "Address": "Raanana"
}

info3.update(info4)

print(info3)

# extends info1/3 with new keys and values and also overwrites values for common keys