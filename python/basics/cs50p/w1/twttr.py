def twttr(switch):

    newWord = []

    for char in switch:

        if char.lower() not in "aeiou":
            newWord.append(char)

    joined = "".join(newWord).lower()

    return joined

    










print("Input: ")
switch = twttr(input())
print(switch)






