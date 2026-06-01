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

## Format numbers

```python
price = 199.987
print(f"Price: {price:.2f}")
```

`:.2f` means show two decimal places.

## Common mistakes

- Forgetting to convert `input()` before doing math.
- Users typing letters where numbers are expected.
- Dividing by zero.

## Practice

1. Ask for a name and age, then print the age ten years from now.
2. Ask for three scores and calculate the average.
3. Ask for a price and discount percentage, then calculate the final price.

## Mini challenge

Create a Celsius to Fahrenheit converter using `F = C * 9 / 5 + 32`.

## Summary

You can now accept user input, convert values, and display readable results.
