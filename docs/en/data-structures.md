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

## Which one should you use?

| Need | Use |
| --- | --- |
| Editable ordered items | list |
| Fixed group of values | tuple |
| Named values | dictionary |
| Unique values | set |

## Practice

1. Create a `friends` list with at least three names, use `.append()` to add one more name, then `print()` the full list.
2. Create a `book` dictionary with `title`, `author`, and `pages` keys, then `print()` the value from the `title` key.
3. Use a loop to ask for five words, store them in a list, then convert the list to a set to see which words are duplicated.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Use a list when the data is an ordered collection that can grow or change.

```python
friends = ["Mali", "Anan", "Nok"]
friends.append("Som")
print(friends)
```

Output: `['Mali', 'Anan', 'Nok', 'Som']`

### Answer 2

Use a dictionary when each value has a named key, such as `title`, `author`, and `pages`, and you want to look it up by key.

```python
book = {
    "title": "Python Adventure",
    "author": "Mali",
    "pages": 120
}
print(book["title"])
```

Output: `Python Adventure`

### Answer 3

Collect all words in a list first, then convert to a set to remove duplicates.

```python
words = []
for round_number in range(5):
    words.append(input("Type a word: "))

unique_words = set(words)
print(unique_words)
```

</details>

## Mini challenge

Create a contact book with a dictionary where each name is a key and each phone number is a value. Ask for a name to search. If it exists, print the phone number; if not, ask for a new phone number, add it, and show the updated contact.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

Use a dictionary because the contact name can be the key and the phone number can be the value. This covers both finding an existing name and adding a new one.

```python
contacts = {
    "Mali": "080-111-1111",
    "Anan": "080-222-2222"
}

name = input("Find a name: ")
if name in contacts:
    print(f"{name}'s phone: {contacts[name]}")
else:
    phone = input("No phone yet. Add one: ")
    contacts[name] = phone
    print(f"Added: {name} -> {phone}")
```

</details>

## Summary

Data structures help you organize data correctly for the problem you are solving.
