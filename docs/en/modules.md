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

## Mini challenge

Build a password generator using `random` and strings of letters and numbers.

## Summary

Modules let you reuse existing tools and organize your own code into smaller files.
