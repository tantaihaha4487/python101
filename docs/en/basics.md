# Python Basics

This lesson covers the foundation of every Python program: variables, data types, comments, and output.

## Variables

A variable is a name that stores a value.

```python
name = "Mali"
age = 16
height = 165.5
is_student = True
```

Python does not require you to declare the data type first. It understands the type from the value.

## Basic data types

| Type | Example | Meaning |
| --- | --- | --- |
| `str` | `"hello"` | text |
| `int` | `10` | whole number |
| `float` | `3.14` | decimal number |
| `bool` | `True` | true or false |

Use `type()` to inspect a value:

```python
print(type("hello"))
print(type(10))
```

## Output with print

```python
name = "Mali"
print("Hello", name)
print("Hello " + name)
print(f"Hello {name}")
```

Use `+` to join text with a text variable, such as `"Hello " + name`.
An f-string lets you place variable values inside text. It is one of the most common ways to format output in Python.

## Comments

Comments are ignored by Python. Use them to explain code that is not obvious.

```python
# Calculate price after 10% discount
price = 100
final_price = price * 0.9
```

## Naming variables

Use `snake_case`:

```python
student_name = "Anan"
total_score = 95
```

Avoid names that are too short or unclear unless you are writing a tiny experiment.

## Common mistake

```python
age = "16"
print(age + 1)  # error: text cannot be added to a number
```

Fix it by converting the value:

```python
age = int("16")
print(age + 1)
```

## Practice

1. Create variables for your name, age, school, and favorite subject.
2. Print them in a sentence using an f-string.
3. Use `type()` on at least three values.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Create all variables from the prompt: name, age, school, and favorite subject.

```python
name = "Mali"
age = 16
school = "Python School"
favorite_subject = "art"
```

### Answer 2

Use an f-string to combine the variable values into one sentence.

```python
print(f"{name} is {age} years old, studies at {school}, and likes {favorite_subject}.")
```

### Answer 3

Use `type()` to inspect at least three values.

```python
print(type(name))
print(type(age))
print(type(favorite_subject))
```

</details>

## Mini challenge

Write a program that calculates your age five years from now and prints a sentence.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Store the current age, calculate a new value, then print it in a sentence.

```python
name = "Mali"
age = 16
future_age = age + 5

print(f"In 5 years, {name} will be {future_age} years old.")
```

</details>

## Summary

You learned variables, basic data types, `print()`, f-strings, comments, and readable names.
