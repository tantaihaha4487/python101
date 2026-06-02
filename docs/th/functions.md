# Functions

Function คือกล่องคำสั่งที่ตั้งชื่อได้ ใช้ซ้ำได้ และช่วยให้โค้ดอ่านง่ายขึ้น

## สร้าง function

```python
def greet():
    print("สวัสดี")

greet()
```

ผลลัพธ์:

```text
สวัสดี
```

## Parameters

```python
def greet(name):
    print(f"สวัสดี {name}")

greet("Mali")
```

ผลลัพธ์: `สวัสดี Mali`

## Return value

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

ใช้ `return` เมื่อ function ควรส่งค่ากลับไปให้ส่วนอื่นใช้ต่อ

ถ้า function ใช้ `return` เราสามารถเก็บผลลัพธ์ไว้ในตัวแปร เช่น `result` แล้วนำไป `print()` หรือคำนวณต่อได้

## Default arguments

```python
def greet(name="friend"):
    print(f"Hello {name}")

greet()
greet("Anan")
```

## Scope

ตัวแปรที่สร้างใน function จะใช้ได้ใน function นั้นเท่านั้น

```python
def show_age():
    age = 16
    print(age)

show_age()
```

## ข้อผิดพลาดที่พบบ่อย

- ลืมเรียก function หลังสร้าง
- ใช้ `print()` แทน `return` ในงานที่ต้องนำค่าไปคำนวณต่อ
- ตั้งชื่อ function ไม่ชัดเจน

## แบบฝึกหัด

1. สร้าง function `celsius_to_fahrenheit(celsius)` ที่ `return` ค่า Fahrenheit แล้วทดสอบด้วย `0`
2. สร้าง function `rectangle_area(width, height)` ที่ `return` พื้นที่ แล้วทดสอบด้วย 4 และ 5
3. สร้าง function `is_even(number)` ที่ `return` `True` ถ้าเลขเป็นคู่ และ `False` ถ้าเลขเป็นคี่ แล้วทดสอบด้วย 2 และ 3

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

สร้าง function ที่รับค่า Celsius แล้ว `return` ค่า Fahrenheit เพื่อเอาผลลัพธ์ไปใช้ต่อได้

```python
def celsius_to_fahrenheit(celsius):
    return celsius * 9 / 5 + 32

print(celsius_to_fahrenheit(0))
```

ผลลัพธ์: `32.0`

### เฉลยข้อ 2

พื้นที่สี่เหลี่ยมคือความกว้างคูณความสูง

```python
def rectangle_area(width, height):
    return width * height

print(rectangle_area(4, 5))
```

ผลลัพธ์: `20`

### เฉลยข้อ 3

เลขคู่คือเลขที่หาร 2 แล้วเศษเป็น 0

```python
def is_even(number):
    return number % 2 == 0

print(is_even(2))
print(is_even(3))
```

ผลลัพธ์:

```text
True
False
```

</details>

## Mini challenge

เขียน calculator ที่รับเลข 2 ตัวและเครื่องหมาย `+`, `-`, `*`, `/` โดยแยกแต่ละ operation เป็น function `add`, `subtract`, `multiply`, `divide`; ต้องจัดการกรณีหารด้วยศูนย์และเครื่องหมายที่ไม่รู้จักด้วย

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

แยกแต่ละเครื่องหมายเป็น function แล้วใช้ `if/elif/else` เพื่อครอบคลุม `+`, `-`, `*`, `/`, การหารด้วยศูนย์ และเครื่องหมายที่ไม่รู้จัก

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "หารด้วยศูนย์ไม่ได้"
    return a / b

first = float(input("เลขตัวแรก: "))
operator = input("เครื่องหมาย (+ - * /): ")
second = float(input("เลขตัวที่สอง: "))

if operator == "+":
    result = add(first, second)
elif operator == "-":
    result = subtract(first, second)
elif operator == "*":
    result = multiply(first, second)
elif operator == "/":
    result = divide(first, second)
else:
    result = "ไม่รู้จักเครื่องหมายนี้"

print(result)
```

</details>

## สรุป

Function ทำให้โค้ดเป็นระเบียบ ลดการซ้ำ และเป็นก้าวสำคัญสู่การเขียนโปรแกรมขนาดใหญ่
