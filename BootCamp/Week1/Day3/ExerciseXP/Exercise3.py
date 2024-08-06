# 1. Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green

# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": "pink, green"
        }
}

# 3. Change the number of stores to 2.
brand["number_stores"] = 2
print(brand["number_stores"])

# 4. Print a sentence that explains who Zaras clients are.
types_of_clothes_vals = brand["type_of_clothes"]

print("The typical clinets of Zara are customers who buy clothes for:")
for i in range(0 ,len(types_of_clothes_vals)):
    print(types_of_clothes_vals[i])

# 5. Add a key called country_creation with a value of Spain.
brand["country_creation"] = "Spain"

# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
print(brand["international_competitors"])


brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])

# 7. Delete the information about the date of creation.
del brand["creation_date"]
print(brand)

# 8. Print the last international competitor.
print(brand["international_competitors"][-1])

# 9. Print the major clothes colors in the US.
major_color_vals = brand["major_color"]
print(major_color_vals["US"])

# 10. Print the amount of key value pairs (ie. length of the dictionary).
print(len(brand))

# 11. Print the keys of the dictionary.
print(brand.keys())

# 12. Create another dictionary called more_on_zara with the following details:
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)
print(brand)

# 14. Print the value of the key number_stores. What just happened ?
print(brand["number_stores"])
# the value got updated from the latter dictionary
