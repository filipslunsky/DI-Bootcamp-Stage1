from collections import Counter
import string

class Text:
    @classmethod # part 2 of the challenge
    def from_file(cls, file_name):
        with open(file_name, 'r') as f:
            text = f.read()
        return cls(text)

    
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        lower_text = self.text.lower()
        word_list = lower_text.split(" ")
        word = word.lower()
        frequency = word_list.count(word)
        if frequency > 0:
            return f"The total frequency of <<{word}>> in this text is {frequency}."
        else:
            return f"The word <<{word}>> is not in this text."
    
    def most_common_word(self):
        lower_text = self.text.lower()
        word_list = lower_text.split(" ")
        counter = Counter(word_list)
        most_common_word, count = counter.most_common(1)[0]
        return f"The most common word in this text is <<{most_common_word}>>, number of occurence: {count}."
    
    def unique_words(self):
        lower_text = self.text.lower()
        word_list = lower_text.split(" ")
        unique_words = []
        for word in word_list:
            if word not in unique_words:
                unique_words.append(word)
        return unique_words
        
text = "A good book would sometimes cost as much as a good house."

text_analysis1 = Text(text)

print(text_analysis1.word_frequency("good"))
print(text_analysis1.most_common_word())
print(text_analysis1.unique_words())

text_analysis2 = Text.from_file("the_stranger.txt")

print(text_analysis2.most_common_word())

class TextModification(Text):
    def remove_punctuation(self):
        no_punctuation_text = ''.join(character for character in text if character not in string.punctuation)
        return no_punctuation_text

    def remove_stop_words(self):
        with open("stop_words.txt", "r") as f:
            stop_words = f.read()
            stop_words_list = stop_words.split("\n")
            text = self.remove_punctuation()
            text = text.lower()
            text_list = text.split(" ")
            text_list_cleaned = []
            for word in text_list:
                if word not in stop_words_list:
                    text_list_cleaned.append(word)
            text_cleaned = " ".join(text_list_cleaned)
            return text_cleaned

    def remove_special_characters(self):
        no_special_characters_text = "".join(character for character in self.text if character.isalnum() or character == " ")
        return no_special_characters_text



text_modification1 = TextModification(text)

print(text_modification1.remove_punctuation())
print(text_modification1.remove_stop_words())
print(text_modification1.remove_special_characters())

