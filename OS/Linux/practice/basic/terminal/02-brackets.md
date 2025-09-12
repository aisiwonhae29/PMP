# brackets

### types

**\# Square bracket: []**

- Scenario

1. Conditional test

```bash
if [condition]; then
    #commands
 fi
```


2. Double square brackets
   - This provide additional functionality and are more flexible.

```bash
if [[condition]]; then
    #commands
 fi
```

**\# Curly bracket: {}**

- Scenario

1. Commnd grouping

```bash
{ echo "Hello" ; command2; command3; }
```

2. Variable expansion

```bash
name=John
echo "Hello ${name}"
```

3. Brace expansion

```bash
echo {1..5}
echo aax{1..3}
```

**\# Parentheses: ()**

- Scenario

1. Used for subshell

```bash
(output=$(ls); echo $output)
```

**\# Angle brackets: <>**

- Scenario

1. Input Rederection

```bash
cat < file.txt
```

2. Output Rederection

```bash
echo "Hello" > file.txt
```

