users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# 1. Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

scores = []
for i in range(0, 5):
    scores.append(i)

disney_users_A = dict(zip(users, scores))
print(disney_users_A)

# 2. Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

disney_users_B = dict(zip(scores, users))
print(disney_users_B)

# 3. Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
#  print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

users_sorted = sorted(users)
disney_users_C = dict(zip(users_sorted, scores))
print(disney_users_C)

# 4. Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
disney_users_A_i = {}
for key in disney_users_A:
    if "i" in key:
        disney_users_A_i[key] = disney_users_A[key]
print(disney_users_A_i)

# The characters, which names start with the letter “m” or “p”.
disney_users_A_mp_start = {}

for key in disney_users_A:
    if "M" in key or "P" in key:
        disney_users_A_mp_start[key] = disney_users_A[key]
print(disney_users_A_mp_start)
