# Conditions

Conditions let a program make decisions, such as pass/fail, login allowed/denied, or which menu option to run.

## if, elif, else

```python
score = int(input("Score: "))

if score >= 80:
    print("Great")
elif score >= 50:
    print("Pass")
else:
    print("Keep practicing")
```

Python uses indentation to decide which lines belong inside the condition.

## Decision flow

```mermaid
flowchart TD
  A[Receive score from user] --> B{Score >= 80?}
  B -->|Yes| C[Print "Great"]
  B -->|No| D{Score >= 50?}
  D -->|Yes| E[Print "Pass"]
  D -->|No| F[Print "Keep practicing"]
```

This diagram shows that Python checks conditions from top to bottom. Once a condition is true, Python follows that path.

## Comparison operators

| Operator | Meaning |
| --- | --- |
| `==` | equal to |
| `!=` | not equal to |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |

## and, or, not

```python
age = 18
has_card = True

if age >= 18 and has_card:
    print("Allowed")
```

```python
is_admin = False
is_owner = True

if is_admin or is_owner:
    print("Can edit")
```

## Boolean expressions

A condition should read like a clear sentence. For example, `age >= 18` means age is at least 18.

## Common mistakes

- Using `=` instead of `==`.
- Forgetting `:` after `if`.
- Incorrect indentation.
- Checking broad conditions before specific ones.

## Practice

1. Ask for age and classify child, teen, or adult.
2. Ask for a score and print a grade A-F.
3. Ask for username/password and check login.

## Mini challenge

Create a clothing suggestion program based on temperature.

## Summary

Conditions let your program choose different paths based on real data.
