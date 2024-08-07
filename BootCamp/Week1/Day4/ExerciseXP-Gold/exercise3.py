import random

def throw_dice():
    result = random.randint(1, 6)
    return result

def throw_until_doubles():
    dice_one = throw_dice()
    dice_two = throw_dice()
    number_of_throws = 1

    while dice_one != dice_two:
        dice_one = throw_dice()
        dice_two = throw_dice()
        number_of_throws += 1
    
    return number_of_throws

def main():
    results = []
    for i in range(0, 100):
        result = throw_until_doubles()
        results.append(result)
    
    number_of_throws = sum(results)
    average_throws = number_of_throws/100
    average_throws = round(average_throws, 2)
    print(f"It took {number_of_throws} thrwos to get to 100 doubles so every double took about {average_throws} on average.")

main()
