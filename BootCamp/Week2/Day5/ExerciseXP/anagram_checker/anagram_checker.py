from itertools import permutations

class AnagramChecker:
    def __init__(self):
        with open("sowpods.txt", "r") as f:
            valid_words = f.read()
            valid_words = valid_words.lower()
        self.valid_word_list = valid_words.split("\n")

    def is_valid_word(self, word):
        if word in self.valid_word_list:
            return True
        else:
            return False
    
    def get_anagrams(self, word):
        perms = ["".join(p) for p in permutations(word)]
        anagrams = []
        for perm in perms:
            if perm in self.valid_word_list:
                anagrams.append(perm)
        anagrams = list(set(anagrams)) # removing all duplicities from the list for given words with 2 same letters
        anagrams.remove(word) # removing the original word from the list
        return anagrams
    
    def is_anagram(self, word1, word2):
        perms = ["".join(p) for p in permutations(word2)]
        anagrams = []
        for perm in perms:
            if perm in self.valid_word_list:
                anagrams.append(perm)
        if word1 in anagrams:
            return True
        else:
            return False
        


test = AnagramChecker()

if __name__ == "__main__":
    print(test.is_valid_word("abacterial"))
    print(test.is_valid_word("kalsjdakl"))
    print(test.get_anagrams("meat"))
    print(test.get_anagrams("meet"))
    print(test.is_anagram("pit", "typ"))
    print(test.is_anagram("pit", "tip"))

