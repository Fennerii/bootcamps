def conversion(str):
    words = []
    current_word = []

    for char in str: #for characters in str loop
        if char.isupper() and current_word:
            words.append("".join(current_word))
            current_word = []
        current_word.append(char)  

    if current_word:
        words.append("".join(current_word))

    joinedWords = "_".join(words).lower()

    return joinedWords


print(conversion("helloWorld"))