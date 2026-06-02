# Setup And First Python Program

This lesson prepares your computer for Python and teaches you how to run a Python file.

## What is Python?

Python is a programming language used for web apps, automation, data analysis, artificial intelligence, scripts, and many beginner-friendly projects. It is popular for beginners because its syntax is readable and the community is large.

## Install Python

1. Go to `https://www.python.org/downloads/`.
2. Download Python 3.12 or newer.
3. On Windows, enable `Add Python to PATH` during installation.
4. Open a terminal and check:

```bash
python --version
```

Some systems use:

```bash
python3 --version
```

## Install an editor

VS Code is a good beginner choice.

1. Install VS Code.
2. Open Extensions.
3. Install the `Python` extension from Microsoft.

## Create your first file

Create `hello.py`:

```python
print("Hello, Python101")
print("I am learning Python")
```

Run it:

```bash
python hello.py
```

## What is the REPL?

The REPL lets you try Python one line at a time:

```bash
python
```

The real screen uses `>>>` before each command:

```text
>>> 1 + 2
3
>>> print("test")
test
```

`1 + 2` shows a result immediately in the REPL. In a `.py` file, use `print()` when you want to show something on screen.

Exit with `exit()`.

## Common beginner problems

- `python` command not found: check PATH or try `python3`.
- Running from the wrong folder: check your terminal location.
- Naming a file `python.py`: avoid names that conflict with Python itself.

## Practice

1. Create a file named `intro.py` in your practice folder.
2. In that file, use three `print()` lines to show your name, age, and what you want to build with Python.
3. Run the file from the terminal with `python intro.py` and check that all three lines appear.

<details class="answer-reveal">
<summary>Show answer</summary>

This answer covers all three tasks: create `intro.py`, use multiple `print()` lines, and run it from the terminal.

### Answer 1

Create a file named `intro.py`.

### Answer 2

Put this code in the file to print your name, age, and what you want to build.

```python
print("Name: Mali")
print("Age: 16")
print("I want to build: a task tracker")
```

### Answer 3

Run it with:

```bash
python intro.py
```

</details>

## Summary

You should now be able to install Python, run a `.py` file, and understand the difference between running a file and using the REPL.
