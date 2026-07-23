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

You can declare variables with initial values right away:

```python
item_count = 0
section = "B"
gravity = 9.81
faculty = "SCI"
is_member = False
temperature_offset = -3
```

Python has no separate `char` type—a single character is simply a `str` of length 1.

## Naming variables

A variable name must start with a letter or `_` and may contain only letters, digits, and `_`. It cannot contain spaces or `+ - , .`, cannot be a Python keyword, and is case-sensitive, so `age` and `Age` are different variables.

| Variable name | Legal? | Reason |
| --- | --- | --- |
| `songkran_day` | ✓ | Uses letters and `_` |
| `2nd_place` | ✗ | Starts with a digit |
| `_2nd_place` | ✓ | May start with `_` |
| `class` | ✗ | Is a keyword |
| `x-y` | ✗ | Contains `-` |
| `first name` | ✗ | Contains a space |

List all Python keywords with:

```python
import keyword
print(keyword.kwlist)
```

Use `snake_case`:

```python
student_name = "Anan"
total_score = 95
```

Avoid names that are too short or unclear unless you are writing a tiny experiment.

## Basic data types

| Type | Example | Meaning |
| --- | --- | --- |
| `str` | `"hello"` | text |
| `int` | `10` | whole number |
| `float` | `3.14` | decimal number |
| `bool` | `True` | true or false |
| `list` | `["a", "b"]` | changeable sequence |
| `tuple` | `("a", "b")` | unchangeable sequence |
| `dict` | `{"name": "Mali"}` | key-value data |
| `set` | `{"a", "b"}` | collection of unique values |

These collection types are explained in detail in [Data structures](./data-structures.md).

| Data | Data type |
| --- | --- |
| `42` | `int` |
| `"Chiang Mai"` | `str` |
| `["a", "b"]` | `list` |
| `True` | `bool` |
| `9.81` | `float` |
| `{"a", "b"}` | `set` |

## Check and convert types

Use `type()` to inspect a value:

```python
print(type("hello"))
print(type(10))
```

Use `int()`, `float()`, `str()`, and `bool()` to create or convert values to the required types:

```python
print(float(5))
print(int(5.5))
print(int(-5.9))
print(int("5") + 1)
print(float("5.5") + 1)
print(True)
```

Output:

```text
5.0
5
-5
6
6.5
True
```

Remember that `int()` **truncates toward zero; it does not round**. That is why `int(-5.9)` is `-5`, not `-6`; converting text entered by a user is covered next in [Input and Output](./input-output.md).

## Output with print

```python
name = "Mali"
print("Hello", name)
print("Hello " + name)
print(f"Hello {name}")
```

Use `+` to join text with a text variable, such as `"Hello " + name`.
An f-string lets you place variable values inside text. It is one of the most common ways to format output in Python.

Use `:.2f` to display a decimal value with two digits after the decimal point:

```python
value = 3.14159
print(f"{value:.2f}")
```

Output:

```text
3.14
```

[Input and Output](./input-output.md) covers reading real user input and more ways to display results.

## Comments

Comments are ignored by Python. Use them to explain code that is not obvious.

```python
# Calculate price after 10% discount
price = 100
final_price = price * 0.9
```

## Arithmetic operators

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `+` | addition | `7 + 2` | `9` |
| `-` | subtraction | `7 - 2` | `5` |
| `*` | multiplication | `7 * 2` | `14` |
| `/` | division | `7 / 2` | `3.5` |
| `//` | floor division | `7 // 2` | `3` |
| `%` | remainder | `7 % 2` | `1` |
| `**` | exponentiation | `7 ** 2` | `49` |

```python
print(2 ** 10)
print(27 % 12)
print(10 / 2)
print(10 // 3)
n = 9
print((n * (n + 1)) / 2)
```

Output:

```text
1024
3
5.0
3
45.0
```

The `/` operator **always produces a float**, even when the division is exact. That is why `10 / 2` is `5.0`, not `5`.

## Assignment operators

`=` assigns a value, while `+=`, `-=`, `*=`, and `/=` calculate from the old value and store the result back in the same variable.

```python
count = 8
count += 12
print(count)
count -= 5
print(count)
```

Output:

```text
20
15
```

When `+=` is used with a `str`, Python joins text instead of adding numbers.

## Operator precedence

Python calculates in this order, and operators at the same level work from left to right:

1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication and division `* / // %`
4. Addition and subtraction `+ -`

```python
print(2 + 3 * 4 ** 2)
print((2 + 3) * 4)
```

Output:

```text
50
20
```

The first expression calculates `4 ** 2` as 16, multiplies it by 3 to get 48, and then adds 2.

## Useful math functions

| Function | Example | Result |
| --- | --- | --- |
| absolute value | `abs(-1980)` | `1980` |
| round to an integer | `round(58.72)` | `59` |
| round to a number of places | `round(3.14159, 2)` | `3.14` |
| truncate a decimal | `int(58.72)` | `58` |
| exponentiation | `4 ** 3` | `64` |
| square root | `math.sqrt(225)` | `15.0` |
| square root with an exponent | `225 ** 0.5` | `15.0` |
| round down | `math.floor(58.72)` | `58` |
| round up | `math.ceil(58.12)` | `59` |

Both `math.sqrt()` and `** 0.5` produce a **float**—`15.0`, not `15`. `math.floor`, `math.ceil`, and `math.sqrt` require `import math`; learn more about imports in [Modules](./modules.md).

## Common mistakes

```python
age = "16"
print(age + 1)  # error: text cannot be added to a number
```

Fix it by converting the value:

```python
age = int("16")
print(age + 1)
```

- Expecting `int(5.9)` to round up to 6 when it actually gives 5
- Expecting `/` to produce an integer when it actually produces a `float`
- Using a Python keyword as a variable name
- Forgetting parentheses and changing the result because of operator precedence
- Dividing with `5 / 0`, which raises `ZeroDivisionError`

## Practice

1. Judge whether each of these six names is a legal Python variable name, and give the reason when it is not: `songkran_day`, `2nd_place`, `_2nd_place`, `class`, `x-y`, `first name`.
2. Create five variables holding, in order, an `int`, a `str`, a `float`, a `bool`, and a `list`. Then print the type of each with `type()`.
3. Predict the exact printed result of each: `float(9)`, `int(9.7)`, `int("9") + 1`, `7 / 2`, `7 // 2`, `7 % 2`, `3 ** 4`.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Check the first character, allowed characters, and Python keywords for each name.

```python
songkran_day = 1  # legal
# 2nd_place = 1  -> error: starts with a digit
_2nd_place = 1  # legal
# class = 1  -> error: Python keyword
# x-y = 1  -> error: contains -
# first name = 1  -> error: contains a space
```

### Answer 2

Assign values of the five requested types in order, then pass each variable to `type()`.

```python
student_count = 30
province = "Chiang Mai"
temperature = 28.5
is_open = True
subjects = ["math", "science"]

print(type(student_count))
print(type(province))
print(type(temperature))
print(type(is_open))
print(type(subjects))
```

Output:

```text
<class 'int'>
<class 'str'>
<class 'float'>
<class 'bool'>
<class 'list'>
```

### Answer 3

Calculate each result using the conversion rules and the meaning of each operator.

```python
print(float(9))
print(int(9.7))
print(int("9") + 1)
print(7 / 2)
print(7 // 2)
print(7 % 2)
print(3 ** 4)
```

Output:

```text
9.0
9
10
3.5
3
1
81
```

</details>

## Mini challenge

Calculate compound interest with the hard-coded values `principal = 25000`, `rate = 0.05`, and `years = 4`. Use `total = principal * (1 + rate) ** years`, then display the result with `:.2f`.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Exponentiate the growth factor before multiplying by the principal, then format the result with two decimal places.

```python
principal = 25000
rate = 0.05
years = 4
total = principal * (1 + rate) ** years

print(f"{total:.2f}")
```

</details>

## Summary

You learned variables, data types, type conversion, operators, and operator precedence—the foundation for the lessons ahead.
