# 1 Sorting
def sort_alphabetically(string):
    words = string.split(",")
    sorted_words = [word for word in sorted(words)]
    return sorted_words

print(sort_alphabetically("without,hello,bag,world"))






# 2 the longest word
def longest_word(sentece):
    words = sentece.split(" ")
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))