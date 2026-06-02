# Modules

Module คือไฟล์ Python หรือชุดคำสั่งที่นำมาใช้ซ้ำได้ ช่วยให้ไม่ต้องเขียนทุกอย่างเอง

## import module

```python
import random

number = random.randint(1, 10)
print(number)
```

ผลลัพธ์จะเป็นเลขสุ่ม เช่น `7` ครั้งต่อไปอาจได้เลขอื่น

## import เฉพาะสิ่งที่ใช้

```python
from math import sqrt

print(sqrt(16))
```

ผลลัพธ์: `4.0`

## Built-in modules ที่ควรรู้

- `random` สุ่มค่า
- `math` คณิตศาสตร์
- `datetime` วันเวลา
- `os` ทำงานกับระบบไฟล์และ environment

## สร้าง module เอง

สร้างไฟล์ `helpers.py`

```python
def add(a, b):
    return a + b
```

ใช้ใน `main.py`

```python
from helpers import add

print(add(2, 3))
```

ผลลัพธ์: `5`

## pip คืออะไร

ส่วนนี้เป็นภาพรวมสำหรับบทต่อ ๆ ไป ตอนเริ่มต้นให้ใช้ built-in modules ก่อนก็พอ

`pip` ใช้ติดตั้ง package จากภายนอก เช่น `requests`

```bash
python -m pip install requests
```

## Virtual environment

Virtual environment ช่วยแยก dependencies ของแต่ละโปรเจกต์ ถ้ายังเรียนพื้นฐานอยู่ ให้จำไว้ก่อนว่าเป็นเครื่องมือสำหรับโปรเจกต์จริง

```bash
python -m venv .venv
```

## แบบฝึกหัด

1. ใช้ `random.randint(1, 100)` สุ่มเลขตั้งแต่ 1 ถึง 100 แล้วแสดงผลด้วย `print()`
2. ใช้ `date.today()` จาก module `datetime` เพื่อแสดงวันที่ปัจจุบัน
3. สร้างไฟล์ `tax_tools.py` ที่มี function `add_tax(price, tax_percent)` แล้ว import มาใช้ใน `main.py`

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

`random.randint(1, 100)` ครอบคลุมเลขตั้งแต่ 1 ถึง 100

```python
import random

number = random.randint(1, 100)
print(number)
```

### เฉลยข้อ 2

ใช้ `date.today()` จาก module `datetime` เพื่อแสดงวันที่ปัจจุบัน

```python
from datetime import date

today = date.today()
print(today)
```

### เฉลยข้อ 3

สร้าง module แยกไฟล์ แล้ว import function มาใช้ในไฟล์หลัก

ไฟล์ `tax_tools.py`:

```python
def add_tax(price, tax_percent):
    return price + (price * tax_percent / 100)
```

ไฟล์ `main.py`:

```python
from tax_tools import add_tax

print(add_tax(100, 7))
```

</details>

## Mini challenge

สร้าง password generator ที่รับความยาวรหัสผ่านจากผู้ใช้ ถ้าความยาวน้อยกว่าหรือเท่ากับ 0 ให้แสดงข้อความเตือน ถ้าถูกต้องให้สุ่มตัวอักษรและตัวเลขด้วย `random.choice()` จนครบความยาวที่กำหนด

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ตัวอย่างนี้ครอบคลุมความยาวที่ไม่ถูกต้อง (`<= 0`) และความยาวที่ใช้สร้างรหัสผ่านได้

```python
import random
import string

length = int(input("ความยาวรหัสผ่าน: "))

if length <= 0:
    print("ความยาวต้องมากกว่า 0")
else:
    characters = string.ascii_letters + string.digits
    password = ""

    for count in range(length):
        password += random.choice(characters)

    print(password)
```

</details>

## สรุป

Module ทำให้คุณใช้ความสามารถที่มีอยู่แล้วและแยกโค้ดให้เป็นระเบียบมากขึ้น
