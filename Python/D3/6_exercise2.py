sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}

print(sample_dict)

#  ---- manual del approach ----
# del sample_dict["name"]
# del sample_dict["salary"]

# print(sample_dict)

# ----- pop approach -------
# name_val = sample_dict.pop("name")
# salary_val = sample_dict.pop("salary")

# print(name_val)
# print(salary_val)
# print(sample_dict)

# ------- loop approach with del ------
# it can be done similarly with pop()
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    if key in sample_dict:
        del sample_dict[key]

print(sample_dict)
