# index

a01()

# case 01: print out string data

def a01()
    puts "Hello, Ruby!"
end

# case 02: variables and Data types

def 02()
    # variables
    a = 10
    b = 3.14
    c = "Hello, Ruby!"
    d = true

    puts a
    puts b
    puts c
    puts d
end

# case 03: conditional Statements

def a03()
    a = 10

    if a > 5
        puts "a is greater than 5"
    else
        puts "a is less than 5"
    end
end

# case 04: class

def a04()
    class Person
        attr_accessor :name, :age

        def initialize(name, age)
        @name, age = name, age

        end

        def introduce
            "My name is #{@name} and I am #{@age} years old."
        end
    end

    Person = Person.new("John", 25)
    puts person.introduce
end