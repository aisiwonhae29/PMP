# Sub shell

### about

- A subshell is a child process launched by a shell (or shell script).

### usecase

1. Parentheses

```bash
(output=$(ls); echo $output)
```

2. Command substitution

```bash
current_date=$(date)
echo "Current date: $current_date"
```

3. scripts

```bash
./script.sh
```

4. pipelines

```bash
echo "Hello" | grep "He"
```

5. background jobs

```bash
./script.sh &
```

