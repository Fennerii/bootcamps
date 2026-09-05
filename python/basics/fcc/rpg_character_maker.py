full_dot = '●'
empty_dot = '○'

def create_character(name, strn,inte,chari):
    if not isinstance(name,str):
        return "The character name should be a string"
    if name == "":
        return "The character should have a name"
    if len(name) > 10:
        return "The character name is too long"
    if " " in name:
        return "The character name should not contain spaces"

    if not all(isinstance( obj, int) for obj in (strn,inte,chari)):
        return "All stats should be integers"
    if strn < 1 or inte < 1 or chari < 1:
        return "All stats should be no less than 1"
    if strn > 4 or inte > 4 or chari > 4:
        return "All stats should be no more than 4"
    if strn + inte + chari != 7:
        return "The character should start with 7 points"

    skills_strn = full_dot * strn + empty_dot * (10 - strn)
    skills_inte = full_dot * inte + empty_dot * (10 - inte)
    skills_chari = full_dot * chari + empty_dot * (10 - chari)

    return name + "\n" + "STR " + skills_strn + "\n" + "INT " + skills_inte + "\n" + "CHA " + skills_chari 
