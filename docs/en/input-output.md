# Input And Output

Useful programs usually accept information from the user, process it, and show a result.

## Receive input

```python
name = input("Your name: ")
print(f"Hello {name}")
```

`input()` always returns text, even when the user types a number.

## Convert types

```python
age_text = input("Age: ")
age = int(age_text)
print(f"Next year you will be {age + 1}")
```

Common conversion functions:

- `int()` converts to a whole number
- `float()` converts to a decimal number
- `str()` converts to text

## Simple calculator

```python
first = float(input("First number: "))
second = float(input("Second number: "))

print(f"Add = {first + second}")
print(f"Subtract = {first - second}")
print(f"Multiply = {first * second}")
print(f"Divide = {first / second}")
```

Example run:

```text
First number: 10
Second number: 2
Add = 12.0
Subtract = 8.0
Multiply = 20.0
Divide = 5.0
```

## Format numbers

```python
price = 199.987
print(f"Price: {price:.2f}")
```

`:.2f` means show two decimal places.

The output is:

```text
Price: 199.99
```

## Common mistakes

- Forgetting to convert `input()` before doing math.
- Users typing letters where numbers are expected.
- Dividing by zero.

## Practice

1. Ask for the prices of two products, convert them to `float`, then print the total with two decimal places.
2. Ask for the GPA of the first semester and the second semester, convert them to `float`, calculate the average for the year, and print it with two decimal places.
3. Ask for an item price and discount percentage, convert both to `float`, then print the price after the discount.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

`input()` returns text, so convert each price with `float()` before adding, and use `:.2f` so two decimal places always show.

```python
price1 = float(input("Price of item 1: "))
price2 = float(input("Price of item 2: "))
total = price1 + price2
print(f"Total price: {total:.2f}")
```

### Answer 2

Use `float()` because a GPA is a decimal number, then divide by the number of semesters.

```python
gpa1 = float(input("First semester GPA: "))
gpa2 = float(input("Second semester GPA: "))
average = (gpa1 + gpa2) / 2
print(f"Average GPA: {average:.2f}")
```

### Answer 3

Calculate the discount amount first, then subtract it from the original price.

```python
price = float(input("Item price: "))
discount = float(input("Discount (%): "))
final_price = price - (price * discount / 100)
print(f"Final price: {final_price:.2f}")
```

</details>

## Mini challenge

Create a program that asks for a Celsius temperature, converts it to `float`, calculates Fahrenheit with `F = C * 9 / 5 + 32`, then prints both the Celsius and Fahrenheit values.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Convert the input to `float` so decimal temperatures also work.

```python
celsius = float(input("Temperature in Celsius: "))
fahrenheit = celsius * 9 / 5 + 32

print(f"{celsius:.1f} C = {fahrenheit:.1f} F")
```

Example run:

```text
Temperature in Celsius: 25
25.0 C = 77.0 F
```

</details>

## Summary

You can now accept user input, convert values, and display readable results.
