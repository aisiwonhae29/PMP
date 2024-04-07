# oa03: open
def t01():
    with open('../zz_asset/test.txt', "r") as file:
        contents = file.read()
        print(contents)
def t02():
    with open('../zz_asset/test111.txt', "w"):
        print(123)
