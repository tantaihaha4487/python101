# Modules

A module is a Python file or package that you can reuse. Modules help you avoid writing everything yourself.

## import a module

```python
import random

number = random.randint(1, 10)
print(number)
```

## import only what you need

```python
from math import sqrt

print(sqrt(16))
```

## Built-in modules to know

- `random` for random values
- `math` for math functions
- `datetime` for dates and times
- `os` for operating system features

## Create your own module

Create `helpers.py`:

```python
def add(a, b):
    return a + b
```

Use it in `main.py`:

```python
from helpers import add

print(add(2, 3))
```

## What is pip?

`pip` installs external packages, such as `requests`.

```bash
python -m pip install requests
```

## Virtual environments

A virtual environment separates dependencies for each project.

```bash
python -m venv .venv
```

## Practice

1. Use `random` to generate a number from 1 to 100.
2. Use `datetime` to print today's date.
3. Create your own module with a tax calculation function.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

`random.randint(1, 100)` covers numbers from 1 through 100.

```python
import random

number = random.randint(1, 100)
print(number)
```

### Answer 2

Use `date.today()` from the `datetime` module to print the current date.

```python
from datetime import date

today = date.today()
print(today)
```

### Answer 3

Create a separate module file, then import its function in the main file.

File `tax_tools.py`:

```python
def add_tax(price, tax_percent):
    return price + (price * tax_percent / 100)
```

File `main.py`:

```python
from tax_tools import add_tax

print(add_tax(100, 7))
```

</details>

## Mini challenge

Build a password generator using `random` and strings of letters and numbers.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

This covers invalid lengths (`<= 0`) and valid lengths that generate a password.

```python
import random
import string

length = int(input("Password length: "))

if length <= 0:
    print("Length must be greater than 0")
else:
    characters = string.ascii_letters + string.digits
    password = ""

    for count in range(length):
        password += random.choice(characters)

    print(password)
```

</details>

## Summary

Modules let you reuse existing tools and organize your own code into smaller files.
