# a05: def

# basic shape

def t01(args):
    print(args)

# break: This command break out the loop.

def t02():
    for i in range(1, 20):
        if(i==10):
            break
        print(i)
    return 123
print(t02())