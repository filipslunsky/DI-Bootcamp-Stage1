# Exercise 1 - Random Sentence Generator
import random

def get_words_from_file(file):
    f = open(file)
    words = f.read()
    word_list = words.split("\n")
    return word_list

def get_random_sentence(length):
    world_list = get_words_from_file("sowpods.txt")
    random_words = []
    for i in range(length):
        random_word = random.choice(world_list)
        random_words.append(random_word)
    random_words_lower = [word.lower() for word in random_words]
    sentence = " ".join(random_words_lower)
    sentence += "."
    sentence = sentence.capitalize()
    return sentence

def main():
    print("You can create your very own random sentece with the length of your choice from 2 to 20 words.")
    length = input("Please enter a number between 2 and 20: ")

    try:
        length = int(length)
        if length >= 2 and length <= 20:
            sentence = get_random_sentence(length)
            print("Here is your sentence:")
            print(sentence)
        else:
            print("Sorry, your number was too high or too low.")
    except ValueError as e:
        print("You have entered something which is not a number.")
        print(e)
    
main()
    



# Exercise 2 - Working with JSON
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
    
    
sample_dict = json.loads(sampleJson)

# accessing the nested "salary" key
salary = sample_dict["company"]["employee"]["payable"]["salary"]
print(salary)

# adding the birth_date key
sample_dict["company"]["employee"]["birth_date"] = "1990-07-23"
print(sample_dict)

# saving dictionary to as JSON to a file
with open("sample.json", "w") as json_file:
    json.dump(sample_dict, json_file, indent = 4) # the indenting is not part of the task but I think it looks better and the levels are easier to see



