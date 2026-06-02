# Functions

A function is a named block of code. Functions help you reuse logic and make programs easier to read.

## Create a function

```python
def greet():
    print("Hello")

greet()
```

Output:

```text
Hello
```

## Parameters

```python
def greet(name):
    print(f"Hello {name}")

greet("Mali")
```

Output: `Hello Mali`

## Return values

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

Use `return` when another part of the program needs the result.

When a function uses `return`, you can store the result in a variable such as `result`, then print it or use it in another calculation.

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

1. Create `celsius_to_fahrenheit(celsius)` that `return`s Fahrenheit, then test it with `0`.
2. Create `rectangle_area(width, height)` that `return`s the area, then test it with 4 and 5.
3. Create `is_even(number)` that `return`s `True` for even numbers and `False` for odd numbers, then test it with 2 and 3.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Create a function that receives Celsius and `return`s Fahrenheit so the result can be reused.

```python
def celsius_to_fahrenheit(celsius):
    return celsius * 9 / 5 + 32

print(celsius_to_fahrenheit(0))
```

Output: `32.0`

### Answer 2

Rectangle area is width multiplied by height.

```python
def rectangle_area(width, height):
    return width * height

print(rectangle_area(4, 5))
```

Output: `20`

### Answer 3

An even number has a remainder of 0 when divided by 2.

```python
def is_even(number):
    return number % 2 == 0

print(is_even(2))
print(is_even(3))
```

Output:

```text
True
False
```

</details>

## Mini challenge

Write a calculator that asks for two numbers and an operator: `+`, `-`, `*`, or `/`. Put each operation in its own function: `add`, `subtract`, `multiply`, and `divide`. Also handle division by zero and unknown operators.

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
