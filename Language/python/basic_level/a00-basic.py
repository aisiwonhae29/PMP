# a00: basic

func_list = ['len()', 'strip()', 'join()', 'split()', 'find()', 'int()']

# len(${data})  =>                      return int

def t01():
    t01_dt = "how long is it?"
    print("len", ":", len(t01_dt) )

# strip: ${data}.strip() =>             return string

def t02():
    t02_dt = "  e  "
    print(t02_dt)
    print(t02_dt.strip())

# join: ${pattern}.join(${data}) =>     return string

def t03():
    t03_dt_01_01 = "dragon"
    t03_dt_01_02 = "|"
    t03_dt_02 = "kick"
    print(t03_dt_01_02.join(t03_dt_02))

# split : ${data}.split() =>            return array

def t04():
    t04_dt_01 = "hi my name is siwon"
    t04_dt_02 = '''
                    white
                    space
                '''
    print(t04_dt_02.split())

# find: ${data}.find(${pattern}) =>     return (true: int_location || false: -1)

def t05():
    t05_dt = "hello worlds there is a way to find something"
    t05_rs = t05_dt.find("is22424")
    print(t05_rs)

# int: int(${data}) =>                  return int

def t06():
    num_str     = '123'
    print('t06_num_str: ', int(num_str)+123)
    num_float   = 3.14
    print('t06_num_float: ', int(num_float))
    num_str     = '1110'
    print('t06_numstr: ', int(num_str, base=2))
    num_bool    = True
    print('t06_numbool: ', int(num_bool))
    string      = 'hi'
    # print(int(string)) # this occur error
t06()