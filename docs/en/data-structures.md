# Data Structures

Data structures are ways to store multiple values. Python beginners should know lists, tuples, dictionaries, and sets.

## List

A list stores ordered values and can be changed. Use it when items may be added, removed, or updated.

```python
scores = [80, 75, 90]
scores.append(88)
print(scores[0])
print(len(scores))
```

Output:

```text
80
4
```

`.index()` reports the position of a value. Because index counting starts at 0, add `+ 1` when you want a position a reader would recognise.

```python
stations = ["Mo Chit", "Saphan Khwai", "Ari", "Sanam Pao", "Victory Monument"]

print(stations.index("Ari"))
print(f"Ari is station number {stations.index('Ari') + 1}")
```

Output:

```text
2
Ari is station number 3
```

## Tuple

A tuple is like a list, but it cannot be changed after creation. Use it for values that should stay fixed, such as coordinates.

```python
point = (10, 20)
print(point[0])
```

The output is `10` because indexes start at 0.

## Dictionary

A dictionary stores key-value pairs. Use it when you want to access data by name instead of position.

```python
student = {
    "name": "Mali",
    "age": 16,
    "grade": "A"
}

print(student["name"])
student["age"] = 17
print(student["age"])
```

Output:

```text
Mali
17
```

A dictionary has methods for inspecting what is inside, and `in` checks whether a key exists.

```python
stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}

print(stock["eraser"])
print(stock.keys())
print(stock.values())
print("glue" in stock)
print("pen" in stock)
```

Output:

```text
9
dict_keys(['pen', 'ruler', 'eraser', 'notebook'])
dict_values([4, 2, 9, 6])
False
True
```

`in` on a dictionary checks the **keys** only, not the values. Asking for a key that does not exist raises `KeyError` straight away — both `stock["glue"]` and `stock[0]` fail, because a dictionary is not accessed by position the way a list is.

To avoid crashing when a key may be missing, use `.get()` with a default value.

```python
print(stock.get("glue", 0))
```

Output:

```text
0
```

## Set

A set stores unique values and does not keep a normal order. Use it to remove duplicates from a collection.

```python
tags = {"python", "beginner", "python"}
print(tags)
```

The word `"python"` appears twice, but a set keeps it once. Set order can change, so output may look like:

```text
{'python', 'beginner'}
```

## Slicing

```python
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])
print(numbers[:3])
print(numbers[-1])
```

Output:

```text
[20, 30, 40]
[10, 20, 30]
50
```

`numbers[1:4]` means start at index 1 and stop before index 4, so it returns items at positions 1, 2, and 3.

`range()` can build a list with `list()`, and you can slice the result directly.

```python
numbers = list(range(0, 51, 5))
print(numbers)
print(numbers[1:6])
```

Output:

```text
[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
[5, 10, 15, 20, 25]
```

Slicing works on text too. `[-3:]` takes the last three characters.

```python
student_id = "6612345678"
print(student_id[-3:])
```

Output:

```text
678
```

## Summarize and sort a list

`sum()`, `len()`, `max()`, and `min()` summarise a list immediately.

```python
scores = [72, 95, 88, 60]

print(sum(scores))
print(max(scores))
print(min(scores))
print(sum(scores) / len(scores))
```

Output:

```text
315
95
60
78.75
```

`sorted()` returns a new sorted list, while `.sort()` sorts the original list in place and returns `None`.

```python
names = ["Nok", "Anan", "Mali", "Som"]

print(sorted(names))
print(names)
```

Output:

```text
['Anan', 'Mali', 'Nok', 'Som']
['Nok', 'Anan', 'Mali', 'Som']
```

When two lists line up with each other, you can find the name of the top scorer with `.index(max(...))`.

```python
names = ["Nok", "Anan", "Mali", "Som"]
scores = [72, 95, 88, 60]

print(names[scores.index(max(scores))])
```

Output:

```text
Anan
```

## Turn text into a list

`.split()` cuts text into a list using spaces, or using a separator you choose.

```python
print("23 99 10".split())
print("p01,p03,p01".split(","))
```

Output:

```text
['23', '99', '10']
['p01', 'p03', 'p01']
```

Values from `.split()` are always text, so convert them before doing arithmetic. `map()` converts every item at once.

```python
parts = "23 99 10".split()

print(list(map(int, parts)))
```

Output:

```text
[23, 99, 10]
```

If `map()` still feels unfamiliar, a loop does exactly the same job.

```python
numbers = []
for part in "23 99 10".split():
    numbers.append(int(part))

print(numbers)
```

Comma-separated data often carries stray spaces, so clean each piece with `.strip()` first.

```python
parts = "p01, p03, p01".split(",")
print(parts)
print([part.strip() for part in parts])
```

Output:

```text
['p01', ' p03', ' p01']
['p01', 'p03', 'p01']
```

## Build a dictionary with a loop

When you need to look data up by a short code, store it in a dictionary using that code as the key. This example uses the last three digits of a student ID.

```python
student_ids = ["6612345001", "6612345002", "6612345003"]
lookup = {}

for student_id in student_ids:
    lookup[student_id[-3:]] = student_id

print(lookup)
print(lookup["002"])
print(lookup.get("999", "ID not found"))
```

Output:

```text
{'001': '6612345001', '002': '6612345002', '003': '6612345003'}
6612345002
ID not found
```

## Which one should you use?

| Need | Use |
| --- | --- |
| Editable ordered items | list |
| Fixed group of values | tuple |
| Named values | dictionary |
| Unique values | set |
| Pairing two sets of data | dictionary |

## Common mistakes

- Using an index beyond the end of a list, which raises `IndexError`.
- Asking for a key that is not in the dictionary, which raises `KeyError`. Use `.get()` when you are unsure.
- Writing `names = names.sort()` and getting `None`, because `.sort()` does not return a new list. Use `sorted()` when you want one.
- Forgetting that `.split()` produces text, so values need `int()` or `float()` before arithmetic.
- Forgetting `.strip()` on comma-separated data, which leaves stray spaces attached to each value.

## Practice

1. Given `numbers = list(range(0, 51, 5))`, write down the result of `numbers[1:6]` and the average of that slice.
2. Given `stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}`, write down the result of `stock["eraser"]`, `stock[0]`, `stock.keys()`, `stock.values()`, `"glue" in stock`, and `"pen" in stock`.
3. Given `members = ["Nok", "Anan", "Mali", "Som"]` and `points = [72, 95, 88, 60]`, ask for a new member name and a space-separated line of scores, then print the total number of members, the name with the highest score, and all names in alphabetical order.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

The slice starts at index 1 and stops before index 6, then the average comes from `sum()` divided by `len()`.

```python
numbers = list(range(0, 51, 5))
selected = numbers[1:6]

print(selected)
print(sum(selected) / len(selected))
```

Output:

```text
[5, 10, 15, 20, 25]
15.0
```

### Answer 2

`stock[0]` raises `KeyError` because a dictionary is accessed by key, not by position, and `in` checks keys only.

```python
stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}

print(stock["eraser"])
print(stock.keys())
print(stock.values())
print("glue" in stock)
print("pen" in stock)
```

Output:

```text
9
dict_keys(['pen', 'ruler', 'eraser', 'notebook'])
dict_values([4, 2, 9, 6])
False
True
```

`stock[0]` gives `KeyError: 0`.

### Answer 3

Use `.split()` to separate the scores, `map(int, ...)` to convert them, then `.index(max(...))` to find the top scorer.

```python
members = ["Nok", "Anan", "Mali", "Som"]
points = [72, 95, 88, 60]

members.append(input("New member name: "))
points.extend(map(int, input("New scores (space separated): ").split()))

print(f"Total members: {len(members)}")
print(f"Highest score: {members[points.index(max(points))]}")
print(sorted(members))
```

</details>

## Mini challenge

Create a shop checkout program. Read three products, one per line, each as `code, price`, and store them in a dictionary. Then read a shopping cart as codes separated by commas and print the total, making sure a product picked more than once is charged every time.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Use `.split(",")` to separate the fields, `.strip()` to remove stray spaces, and `float()` to convert the price. Looping over the cart adds each item in turn, so duplicates are charged automatically.

```python
prices = {}

for number in range(3):
    line = input(f"Product {number + 1} (code, price): ")
    code, price = line.split(",")
    prices[code.strip()] = float(price.strip())

cart = input("Shopping cart (codes separated by commas): ").split(",")

total = 0
for code in cart:
    total += prices[code.strip()]

print(f"Total {total:.2f}")
```

Example run:

```text
Product 1 (code, price): p01, 12.50
Product 2 (code, price): p02, 8.00
Product 3 (code, price): p03, 25.75
Shopping cart (codes separated by commas): p01,p03,p01
Total 50.75
```

</details>

## Summary

Data structures help you organize data correctly for the problem you are solving. You can now slice data, summarise and sort it with `sum()` and `sorted()`, turn text into a list with `.split()`, and look values up by key with a dictionary.
