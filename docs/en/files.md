# Working With Files

Many programs need to read or save data, such as notes, logs, user records, and calculation results.

## Write a file

```python
with open("note.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python\n")
    file.write("This is my first file")
```

Mode `w` writes a new file. If the file already exists, it replaces the old content.

## Read a file

```python
with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

## Append to a file

```python
with open("note.txt", "a", encoding="utf-8") as file:
    file.write("\nNew line")
```

## Read line by line

```python
with open("note.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

## Why use with?

`with` closes the file automatically, even if an error happens.

## Common mistakes

- Reading a file that does not exist.
- Forgetting `encoding="utf-8"` for non-English text.
- Using `w` and accidentally deleting old content.

## Practice

1. Save a user's name to a file.
2. Read a file and count the lines.
3. Create a notes app that appends new notes.

## Mini challenge

Create a text-file todo app that can add tasks, show all tasks, and save them to `todo.txt`.

## Summary

Files allow programs to remember data after the program closes.
