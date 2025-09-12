# Dollor mark: $

### case

**\# Referring to Variables**

```bash
name=John
echo "Hello $name"
```

\* Braces {} for clarity: To prevent ambiguity.

**\# Command substitution**

```bash
current_date=$(date)
echo "Current date: $current_date"
```

\* Can round bracket substitue to ``

**\# Special variables**

```bash
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
...
```

**\# Predefined variables**

1. $?: Exit status of the last command.(0 for success, 1 for failure)

```bash
ls
echo $? #0
```

2. $$: Process ID of the current shell.

```bash
echo $$
```

3. $!: Process ID of the last background command.

```bash
sleep 100 &
echo $!
```

4. $@, $*: All arguments passed to the script.

```bash
./script.sh arg1 arg2 arg3
echo $@ # arg1 arg2 arg3
```

5. Evaulating arithmetic

```bash
sum=$((2+3))
echo $sum
```
