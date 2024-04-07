# a01: for statement

t01_data_01 = "hello worlds";
t01_data_02 = [1,2,3,4,5,];
t01_data_03 = { 'a':1, 'b':2, 'c':3 }

# basic for statement


def test1():
    for i in t01_data_01[::]:
        print(i)

    for i in t01_data_02[::]:
        print(i)

    for key1, value in t01_data_03.items():
        print(key1, ':' ,value)

test1()
# 