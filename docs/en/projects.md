# Beginner Projects

Projects turn knowledge into real skill. Build one project at a time and customize it after the basic version works.

## 1. Number guessing game

Goal: the computer chooses a random number and the user guesses until correct.

Concepts: `random`, loops, conditions, input, error handling

```python
import random

secret = random.randint(1, 100)
attempts = 0

while True:
    try:
        guess = int(input("Guess 1-100: "))
    except ValueError:
        print("Please enter a number")
        continue

    attempts += 1

    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print(f"Correct! Attempts: {attempts}")
        break
```

Extra challenges: limit attempts, add difficulty levels, or save the best score to a file.

## 2. Calculator

Goal: ask for two numbers and an operator, then show the result.

```python
def calculate(a, operator, b):
    if operator == "+":
        return a + b
    if operator == "-":
        return a - b
    if operator == "*":
        return a * b
    if operator == "/":
        if b == 0:
            return "Cannot divide by zero"
        return a / b
    return "Unknown operator"

first = float(input("First number: "))
operator = input("Operator (+ - * /): ")
second = float(input("Second number: "))

print(calculate(first, operator, second))
```

Extra challenges: repeat until the user quits, store calculation history, or add powers.

## 3. To-do list

Goal: add and display tasks.

Concepts: list, loop, function, file

Steps:

1. Store tasks in a list.
2. Show a menu: add, list, quit.
3. Move repeated logic into functions.
4. Save tasks to `todo.txt`.

## 4. Password generator

Goal: generate a random password with a chosen length.

Concepts: `random`, strings, loops

Extra challenges: require numbers, symbols, and uppercase letters.

## 5. Rock paper scissors

Goal: play against the computer.

Concepts: conditions, random choice, score counter

Extra challenges: best of three, replay option, input validation.

## 6. Contact book

Goal: add, search, and delete contacts.

Concepts: dictionary, loops, files

Extra challenges: save contacts as JSON after you learn the `json` module.

## 7. Quiz app

Goal: ask multiple questions, check answers, and show a score.

Concepts: list of dictionaries, loops, conditions

Extra challenges: random question order and answer explanations.

## How to build projects effectively

1. Build the smallest working version first.
2. Test after every new feature.
3. Read error lines carefully.
4. Keep a list of improvements and add them one at a time.

## Summary

These projects practice almost all beginner topics: input, conditions, loops, functions, data structures, files, and error handling.
