# Object-Oriented Programming

Object-oriented programming, or OOP, organizes code around objects. It is useful when data and behavior belong together.

## Class and object

A class is a blueprint. An object is something created from that blueprint.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def show_info(self):
        print(f"{self.name}: {self.score}")

student = Student("Mali", 90)
student.show_info()
```

## __init__

`__init__` runs when an object is created. It sets initial values.

## self

`self` means the current object. It lets methods access the object's data.

## Methods

A method is a function inside a class.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Not enough money")
```

## When should you use OOP?

Use OOP when a thing has both data and behavior, such as a student, bank account, product, game character, or todo item.

## Common mistakes

- Forgetting `self` in methods.
- Creating an object without required `__init__` arguments.
- Using a class when a simple function would be clearer.

## Practice

1. Create a `Book` class with title and author.
2. Create a `TodoItem` class with title and completed status.
3. Add a method that marks a todo as complete.

## Mini challenge

Create a `BankAccount` class that supports deposit, withdraw, and balance display. Prevent withdrawals greater than the balance.

## Summary

OOP keeps related data and behavior together, but it should be used when it makes the program clearer.
