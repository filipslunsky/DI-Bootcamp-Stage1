# # 1 Write a script that inserts an item at a defined index in a list.
def add_item(my_list, my_item, index_number):
    my_list.insert(index_number, my_item)
    
    return my_list

print(add_item(["apple", "banana", "cherry"], "orange", 2))

# 2 Write a script that counts the number of spaces in a string.
def count_spaces(my_string):
    number_of_spaces = my_string.count(" ")
   
    return number_of_spaces

print(count_spaces("Hello world and other"))


# 3 Write a script that calculates the number of upper case letters and lower case letters in a string.
def count_upper_lower(my_string):
    upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lower_letters = "abcdefghijklmnopqrstuvwxyz"
    lower = 0
    upper = 0
    for i in range(0, len(my_string)):
        if my_string[i] in lower_letters:
            lower += 1
        elif my_string[i] in upper_letters:
            upper += 1
    
    return upper, lower

print(count_upper_lower("I drive a Toyota"))

# 4 Write a function to find the sum of an array without using the built in function:
def sum_array(array):
    total = 0
    for i in range(0, len(array)):
        total += array[i]
    
    return total
print(sum_array([1, 2, 3, 4, 8]))



# 5 Write a function to find the max number in a list
def find_max(numbers:list):
    max_number = max(numbers)
    
    return max_number

numbers = [1, 78, 23, 43, 11]
print(find_max(numbers))

# 6 Write a function that returns factorial of a number
def factorial(num):
    result = 1
    for i in range(1, num + 1):
        result *= i
    
    return result
print(factorial(4))

# 7 Write a function that counts an element in a list (without using the count method):
def list_count(things:list, thing):
    total = 0
    for i in range(0, len(things)):
        if thing == things[i]:
            total += 1
    
    return total

print(list_count(['a','a','t','o'],'a'))

# 8 Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
def norm(numbers):
    sqr_powers = 0
    for i in range(0, len(numbers)):
        sqr_power = numbers[i] ** 2
        sqr_powers += sqr_power
    sqr_root = sqr_powers ** 0.5
    
    return sqr_root

print(norm([1,2,2]))

# 9 Write a function to find if an array is monotonic (sorted either ascending of descending)
def is_mono(test_list):
    is_mono = False
    mistake_down_counter = 0
    is_going_down = False
    for i in range(1, len(test_list)):
        if test_list[i - 1] >= test_list[i]:
            is_going_down = True
        else:
            mistake_down_counter += 1

    mistake_up_counter = 0
    is_going_up = False
    for i in range(1, len(test_list)):
        if test_list[i - 1] <= test_list[i]:
            is_going_up = True
        else:
            mistake_up_counter += 1

    if mistake_down_counter == 0 or mistake_up_counter == 0:
        is_mono = True

    return is_mono

print(is_mono([7,6,5,5,2,0]))
print(is_mono([2,3,3,3]))
print(is_mono([1,2,0,4]))

# 10 Write a function that prints the longest word in a list.
def longest_word(words):
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    print(longest_word)


# 11 Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
def sort_str_and_int(mixed_list):
    strings = []
    integers = []

    for thing in mixed_list:
        if type(thing) == str:
            strings.append(thing)
        elif type(thing) == int:
            integers.append(thing)
    
    return strings, integers

print(sort_str_and_int([1, 45, "akjsdk", 12, "alksjad", 56, "asdasd", "etgeg"]))


# 12 Write a function to check if a string is a palindrome:
def is_palindrome(word):
    mistake_counter = 0
    for i in range(0, len(word)):
        if word[i] == word[-(i+1)]:
            is_palindrome = True
        else:
            mistake_counter += 1
    if mistake_counter == 0:
        is_palindrome = True
    else:
        is_palindrome = False
    
    return is_palindrome

print(is_palindrome("radar"))
print(is_palindrome("John"))


# 13 Write a function that returns the amount of words in a sentence with length > k:
def sum_over_k(sentence, k):
    words = sentence.split(" ")
    words_over_k = 0
    for word in words:
        if len(word) > k:
            words_over_k += 1
    
    return words_over_k

print(sum_over_k('Do or do not there is no try', 2))


# 14 Write a function that returns the average value in a dictionary (assume the values are numeric):
def dict_avg(dict):
    values = list(dict.values())
    average = sum(values) / len(values)
    
    return average

print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))


# 15 Write a function that returns common divisors of 2 numbers:
def common_div(num1, num2):
    common_divs = []
    numbers = sorted([num1, num2])
    for i in range(2, numbers[0] + 1):
        if num1 % i == 0 and num2 % i == 0:
            common_divs.append(i)
    
    return common_divs

print(common_div(10, 20))


# 16 Write a function that test if a number is prime:
def is_prime(number):
    is_prime = True
    for i in range(2, number):
        if number % i == 0:
            is_prime = False
    
    return is_prime

print(is_prime(11))


# 17 Write a function that prints elements of a list if the index and the value are even:
def weird_print(numbers):
    weird = []
    for i in range(0, len(numbers)):
        if numbers[i] % 2 == 0 and i % 2 == 0:
            weird.append(numbers[i])
    
    return weird

print(weird_print([1,2,2,3,4,5]))


# 18 Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
def type_count(**kwargs):
    types = {"int": 0, "float": 0, "str": 0, "bool": 0}
    for key, value in kwargs.items():
        if type(value) == int:
            types["int"] += 1
        elif type(value) == float:
            types["float"] += 1
        elif type(value) == str:
            types["str"] += 1
        elif type(value) == bool:
            types["bool"] += 1
    
    return types

print(type_count(a = 1, b = 'string', c = 1.0, d = True, e = False))



# 19 Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
def my_split(text, split_character = " "):
    split_character_count = []
    for i in range(0, len(text)):
        if text[i] == split_character:
            split_character_count.append(i)
    print(split_character_count)

    text_list = []
    first_word = ""
    for i in range(0, split_character_count[0]):
        first_word += text[i]
    text_list.append(first_word)

    for i in range(0, len(split_character_count)-1):
        word = ""
        for i in range(split_character_count[i], split_character_count[i + 1]):
            word += text[i]
        text_list.append(word)

    last_word = ""
    for i in range(split_character_count[-1], len(text)):
        last_word += text[i]
    text_list.append(last_word)

    return text_list

print(my_split("By default the function uses whitespace but it should be able to take an argument for any character and split with that argument"))


# 20 Convert a string into password format.
def convert_password(my_password):
    hidden_password = ""
    for i in range(0, len(my_password)):
        hidden_password += "*"
    
    return hidden_password

print(convert_password("mypassword"))

