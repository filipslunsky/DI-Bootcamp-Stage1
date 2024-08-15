from anagram_checker import AnagramChecker

def main():
    print("-----MAIN MENU----")
    choice = ""

    while True:
        print("Please input 'i' if you want to (i)nput a word or 'e' if you want to (e)xit:")
        choice = input()
        if choice == "i" or choice == "e":
            break
        print("Please choose either 'i' or 'e'")

    word = ""
    if choice == "e":
        print("Thank you for using our app.")
    else:
        word = input("Please input a word which you would like to work with: ")

        if len(word) != 0:
            testing = AnagramChecker()
            if testing.is_valid_word(word):
                anagrams = ", ".join(testing.get_anagrams(word))
                print(f"YOUR WORD: '{word.upper()}'")
                print("this is a valid English word")
                print(f"Anagrams for your word: {anagrams}.")
            else:
                print("This is not a valid English word.")
    
        choice = ""

        while True:
            print("If you want try (a)gain with another word, input 'a', if you wish to (e)xit, input 'e':")
            choice = input()
            if choice == "a" or choice == "e":
                break
            print("Please choose either 'a' or 'e'")

        if choice == "e":
            print("I hope you will use the power of anagrams for no evil, thanks for playing:-)")
        else:
            main()
        

main()

