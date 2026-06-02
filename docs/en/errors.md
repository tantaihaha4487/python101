# Error Handling

Errors are normal in programming. The goal is not to avoid every error forever. The goal is to read errors, understand them, and handle expected problems.

## try and except

```python
try:
    age = int(input("Age: "))
    print(f"You are {age}")
except ValueError:
    print("Please enter a number")
```

If the code inside `try` raises a `ValueError`, Python runs the `except` block.

## finally

```python
try:
    number = int(input("Number: "))
except ValueError:
    print("Not a number")
finally:
    print("Finished")
```

`finally` runs whether an error happened or not.

## Common errors

| Error | Common cause |
| --- | --- |
| `ValueError` | Conversion failed, such as `int("abc")` |
| `TypeError` | Wrong type, such as string + int |
| `NameError` | Variable name does not exist |
| `IndexError` | List index is out of range |
| `FileNotFoundError` | File does not exist |

## Read a traceback

A traceback shows the file, line number, and error type. Start with the last line, then look at the file and line number mentioned above it.

For example, if you write `print(age + 1)` when `age` is text:

```text
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(age + 1)
TypeError: can only concatenate str (not "int") to str
```

Read the last line first: `TypeError` says a string cannot be added to an integer. Then use `line 2` to find the code you need to fix.

## Common mistakes

- Using a bare `except:` that hides all errors.
- Showing a generic message without learning the real cause.
- Catching errors but not fixing the actual problem.

## Practice

1. Ask for input and convert it to `int`; if the user types letters, catch `ValueError` and print a message asking for a number.
2. Read `data.txt`; if the file does not exist, catch `FileNotFoundError` and print a clear message.
3. Ask for two numbers and divide them; handle both non-numeric input (`ValueError`) and division by zero (`ZeroDivisionError`).

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Use `try/except ValueError` to cover the case where the user types letters instead of a number.

```python
try:
    number = int(input("Enter a number: "))
    print(f"The number is {number}")
except ValueError:
    print("Please enter digits only")
```

### Answer 2

Use `except FileNotFoundError` to show a clear message when the file does not exist.

```python
try:
    with open("data.txt", "r", encoding="utf-8") as file:
        print(file.read())
except FileNotFoundError:
    print("data.txt was not found")
```

### Answer 3

Separate `ValueError` for non-numeric input and `ZeroDivisionError` for division by zero.

```python
try:
    first = float(input("First number: "))
    second = float(input("Second number: "))
    print(first / second)
except ValueError:
    print("Please enter numbers")
except ZeroDivisionError:
    print("Cannot divide by zero")
```

</details>

## Mini challenge

Improve a 1-10 number guessing game so input is inside `try`; if the user types letters such as `abc`, print `Please enter a number`, ask again with `continue`, and do not count it as an attempt.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Use `continue` after invalid input so the program asks again without counting it as an attempt.

```python
secret = 7
attempts = 0

while True:
    try:
        guess = int(input("Guess 1-10: "))
    except ValueError:
        print("Please enter a number")
        continue

    attempts += 1

    if guess == secret:
        print(f"Correct! Attempts: {attempts}")
        break
    if guess < secret:
        print("Too low")
    else:
        print("Too high")
```

</details>

## Summary

Error handling makes programs friendlier and helps you debug in a systematic way.
