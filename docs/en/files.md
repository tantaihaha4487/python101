# Working With Files

Many programs need to read or save data, such as notes, logs, user records, and calculation results.

## Write a file

```python
with open("note.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python\n")
    file.write("This is my first file")
```

Mode `w` writes a new file. If the file already exists, it replaces the old content.

After running this, `note.txt` contains two lines of text.

## Read a file

```python
with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

Output:

```text
Hello Python
This is my first file
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

1. Ask for a user's name with `input()`, then write it to `user.txt` using `encoding="utf-8"`.
2. Open `user.txt`, read all lines with `readlines()`, and print the number of lines with `len()`.
3. Ask for a new note, then append it to `notes.txt` without deleting old notes.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

Use `w` mode to create or replace a file that stores the user's name.

```python
name = input("User name: ")
with open("user.txt", "w", encoding="utf-8") as file:
    file.write(name + "\n")
```

### Answer 2

Read the file with `readlines()`, then use `len()` to count lines.

```python
with open("user.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
print(f"The file has {len(lines)} lines")
```

### Answer 3

Use `a` mode to append a new note without deleting old notes.

```python
note = input("New note: ")
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write(note + "\n")
```

</details>

## Mini challenge

Create a text-file todo app that accepts `add`, `list`, and `quit` commands: `add` saves a new task to `todo.txt`, `list` shows all tasks, `quit` ends the program, and a first-time `list` should print `No tasks yet` instead of crashing when `todo.txt` does not exist.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

This example covers `add`, `list`, `quit`, unknown commands, and the first run when `todo.txt` does not exist yet.

```python
while True:
    command = input("Type add/list/quit: ")

    if command == "add":
        task = input("New task: ")
        with open("todo.txt", "a", encoding="utf-8") as file:
            file.write(task + "\n")
        print("Task saved")
    elif command == "list":
        try:
            with open("todo.txt", "r", encoding="utf-8") as file:
                lines = file.readlines()
        except FileNotFoundError:
            lines = []

        if len(lines) == 0:
            print("No tasks yet")
        else:
            for line in lines:
                print("- " + line.strip())
    elif command == "quit":
        break
    else:
        print("Unknown command")
```

Example run:

```text
Type add/list/quit: list
No tasks yet
Type add/list/quit: add
New task: Read the Functions lesson
Task saved
Type add/list/quit: list
- Read the Functions lesson
```

</details>

## Summary

Files allow programs to remember data after the program closes.
