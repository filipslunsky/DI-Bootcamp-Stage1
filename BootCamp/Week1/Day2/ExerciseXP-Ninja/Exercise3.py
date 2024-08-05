# - importing paragraph about Monty Python
paragraph = "When it first aired, Monty Python’s Flying Circus was unlike anything that had appeared on television, and in many ways it was both a symbol and a product of the social upheaval and youth-oriented counterculture of the late 1960s. Although sketch comedy was nothing new, television had never broadcast anything so surreal, daring, and untraditional as Monty Python, and its importance to television is difficult to overstate. However, the influence of BBC Radio’s The Goon Show (which aired from 1951 to 1960 and featured the character-driven, absurdist humour of Spike Milligan, Peter Sellers, and Harry Secombe) on Monty Python’s anarchic approach is undeniable."

sum_charactes = len(paragraph)

sentences_list = paragraph.split(".")
sum_senteces = len(sentences_list)

word_list = paragraph.split(" ")
sum_words = len(word_list)

sum_unique_words = len(set(word_list))

# printing out the results 3 - 7
print("Here are the results:")
print(f"This paragraph has {sum_charactes} characters.")
print(f"This paragraph has {sum_senteces} sentences.")
print(f"This paragraph has {sum_words} words.")
print(f"This paragraph has {sum_unique_words} unique words.")

# Bonus: How many non-whitespace characters it contains.
paragraph_without_spaces = paragraph.replace(" ", "")
print(f"This paragraph has {len(paragraph_without_spaces)} characters if we don't count spaces.")

# Bonus: The average amount of words per sentence in the paragraph.
print(f"The average amount of words per sentence in this paragraph is {sum_words/sum_senteces}")

# Bonus: the amount of non-unique words in the paragraph.
print(f"The amount of non-unique words in this paragraph is {sum_words - sum_unique_words}.")