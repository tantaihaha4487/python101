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

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Create a function that receives Celsius and `return`s Fahrenheit so the result can be reused.

```python
def celsius_to_fahrenheit(celsius):
    return celsius * 9 / 5 + 32
```

### Answer 2

Rectangle area is width multiplied by height.

```python
def rectangle_area(width, height):
    return width * height
```

### Answer 3

An even number has a remainder of 0 when divided by 2.

```python
def is_even(number):
    return number % 2 == 0

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(100))
print(rectangle_area(4, 5))
print(is_even(2))
print(is_even(3))
```

The test calls cover low/high temperatures and both even/odd numbers.

</details>

## Mini challenge

Refactor a calculator so each operation is a function: `add`, `subtract`, `multiply`, and `divide`.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Each operator is separated into a function, then `if/elif/else` covers `+`, `-`, `*`, `/`, division by zero, and unknown operators.

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

first = float(input("First number: "))
operator = input("Operator (+ - * /): ")
second = float(input("Second number: "))

if operator == "+":
    result = add(first, second)
elif operator == "-":
    result = subtract(first, second)
elif operator == "*":
    result = multiply(first, second)
elif operator == "/":
    result = divide(first, second)
else:
    result = "Unknown operator"

print(result)
```

</details>

## Summary

Functions organize code, reduce repetition, and prepare you for larger programs.
