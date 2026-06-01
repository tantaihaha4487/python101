# Functions

A function is a named block of code. Functions help you reuse logic and make programs easier to read.

## Create a function

```python
def greet():
    print("Hello")

greet()
```

## Parameters

```python
def greet(name):
    print(f"Hello {name}")

greet("Mali")
```

## Return values

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

Use `return` when another part of the program needs the result.

## Default arguments

```python
def greet(name="friend"):
    print(f"Hello {name}")

greet()
greet("Anan")
```

## Scope

Variables created inside a function only exist inside that function.

```python
def show_age():
    age = 16
    print(age)

show_age()
```

## Common mistakes

- Defining a function but never calling it.
- Using `print()` when you need `return`.
- Giving functions unclear names.

## Practice

1. Create a Celsius to Fahrenheit function.
2. Create a rectangle area function.
3. Create a function that checks even or odd numbers.

## Mini challenge

Refactor a calculator so each operation is a function: `add`, `subtract`, `multiply`, and `divide`.

## Summary

Functions organize code, reduce repetition, and prepare you for larger programs.
