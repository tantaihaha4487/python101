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

## Common mistakes

- Using a bare `except:` that hides all errors.
- Showing a generic message without learning the real cause.
- Catching errors but not fixing the actual problem.

## Practice

1. Ask for a number and handle invalid input.
2. Read a file and show a clear message if it does not exist.
3. Create a calculator that handles division by zero.

## Mini challenge

Improve your number guessing game so it does not crash when the user types letters.

## Summary

Error handling makes programs friendlier and helps you debug in a systematic way.
