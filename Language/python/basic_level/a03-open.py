# a03: open
# Using 'with' automatically close the file

# * Open 'r' option

# 'with' + open() with 'r' option

def t01_01():
    with open('../zz_asset/test.txt', "r", encoding='utf-8') as file:
        contents = file.read()
        print(contents)


# only open with 'r' option

def t01_02():
    file = open("../zz_asset/test.txt", "r", encoding="utf-8")
    print(file.read())

# only open with 'r+' option: Use writing and reading simultaneously

def t01_03():
    file = open('../zz_asset/test111.txt', 'r+')
    content = file.write('Zoro be my sailor!1111')
    content = file.read()
    print(content)

# open file & combination with for statemnent

def t01_04():
    testArr = []
    file = open('../zz_asset/test.txt','r', encoding="utf-8")
    for line in file:
        # print(line) 
        testArr.append(line)
    print(testArr)
    print(len(testArr))
t01_04()

# * Open 'w' option

# 'with' + open() with 'w' option

def t02_01():
    with open('../zz_asset/test111.txt', "w") as file:
        file.write('hello worlds')


# only open with 'w' option

def t02_02():
    file = open('../zz_asset/test111.txt', 'w')
    file.write("I'm the King of the pirates11!!")
    
# 'with' + open() with 'a' option: append lines on specified file.

def t01_02():
    with open('../zz_asset/test111.txt', 'a') as file:
        file.write("\n My name is Mokey.D.Roofie!! The guy who become a King of the pirates")



