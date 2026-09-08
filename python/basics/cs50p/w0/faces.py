def convert(str):
    str = str.replace(":)","🙂")
    str = str.replace(":(", "🙁")
    return str


print(convert("hello :("))