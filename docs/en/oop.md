# Object-Oriented Programming

Object-oriented programming, or OOP, organizes code around objects.

Think of an object as "one thing" that has both data and actions. For example, a student has a name and score, and can show their information or check whether they passed.

## Class and object

A class is a blueprint. An object is a real thing created from that blueprint.

| Word | Meaning | Example |
| --- | --- | --- |
| Class | Blueprint | `Student` |
| Object | Real thing created from a class | `mali`, `anan` |
| Attribute | Data stored in an object | `name`, `score` |
| Method | Action an object can do | `show_info()` |

Start with a student example:

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def show_info(self):
        print(f"{self.name} scored {self.score}")

    def is_passed(self):
        return self.score >= 50

mali = Student("Mali", 90)
anan = Student("Anan", 45)

mali.show_info()
anan.show_info()

print(mali.is_passed())
print(anan.is_passed())
```

In this example, `mali` and `anan` are separate objects, so each one stores its own `name` and `score`.

## __init__

`__init__` runs immediately when an object is created. It sets the starting values for that object.

```python
mali = Student("Mali", 90)
```

That line sends values into `__init__` like this:

| Value passed in | Parameter | Stored on the object |
| --- | --- | --- |
| `"Mali"` | `name` | `self.name` |
| `90` | `score` | `self.score` |

So `mali.name` is `"Mali"`, and `mali.score` is `90`.

## self

`self` means the current object that is using the method.

When you write:

```python
mali.show_info()
```

Python acts as if `mali` is passed into the method as `self`. Inside the method, `self.name` and `self.score` read data from `mali`.

When you write:

```python
anan.show_info()
```

`self` means `anan` instead.

## Methods

A method is a function inside a class. It works with the object's data.

This example changes a todo item's data from not completed to completed:

```python
class TodoItem:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def mark_done(self):
        self.completed = True

    def show_status(self):
        if self.completed:
            print(f"{self.title}: done")
        else:
            print(f"{self.title}: not done")

task = TodoItem("Practice OOP")
task.show_status()
task.mark_done()
task.show_status()
```

The key idea is that a method can do more than print. It can change the object's data, such as `self.completed = True`.

## When should you use OOP?

Use OOP when you have many things of the same kind, and each thing has its own data and actions. Examples: many students, many bank accounts, many products, many game characters, or many todo items.

If your program only calculates one value and stops, a normal function may be clearer than a class.

## Common mistakes

- Forgetting `self` in methods.
- Creating an object without required `__init__` arguments.
- Using a class when a simple function would be clearer.

## Practice

1. Create a `Book` class with title and author.
2. Create a `TodoItem` class with title and completed status.
3. Add a method that marks a todo as complete.

<details class="answer-reveal">
<summary>Show practice answer</summary>

### Answer 1

`Book` stores two pieces of book data: `title` and `author`.

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
```

### Answer 2

`TodoItem` stores a task title and starts with `completed = False`.

```python
class TodoItem:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def mark_done(self):
        self.completed = True
```

### Answer 3

The `mark_done()` method changes the todo status from `False` to `True`.

```python
todo = TodoItem("Practice classes")
print(todo.completed)
todo.mark_done()
print(todo.completed)
```

### Test example

This tests creating a `Book` object.

```python
book = Book("Python Basics", "Thanachot P.")
print(book.title)
print(book.author)
```

</details>

## Mini challenge

Create a `BankAccount` class that supports deposit, withdraw, and balance display. Prevent withdrawals greater than the balance.

<details class="answer-reveal">
<summary>Show mini challenge answer</summary>

This covers normal deposits, normal withdrawals, over-withdrawals, and invalid deposit/withdrawal amounts.

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            print("Deposit must be greater than 0")
            return
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            print("Withdrawal must be greater than 0")
        elif amount > self.balance:
            print("Not enough money")
        else:
            self.balance -= amount

    def show_balance(self):
        print(f"{self.owner} has {self.balance} baht")

account = BankAccount("Mali", 100)
account.deposit(50)
account.withdraw(30)
account.withdraw(500)
account.withdraw(0)
account.show_balance()
```

</details>

## Summary

OOP keeps related data and behavior together, but it should be used when it makes the program clearer.
