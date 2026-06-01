# Modules

Module คือไฟล์ Python หรือชุดคำสั่งที่นำมาใช้ซ้ำได้ ช่วยให้ไม่ต้องเขียนทุกอย่างเอง

## import module

```python
import random

number = random.randint(1, 10)
print(number)
```

## import เฉพาะสิ่งที่ใช้

```python
from math import sqrt

print(sqrt(16))
```

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

## pip คืออะไร

`pip` ใช้ติดตั้ง package จากภายนอก เช่น `requests`

```bash
python -m pip install requests
```

## Virtual environment

Virtual environment ช่วยแยก dependencies ของแต่ละโปรเจกต์

```bash
python -m venv .venv
```

## แบบฝึกหัด

1. ใช้ `random` สุ่มเลข 1-100
2. ใช้ `datetime` แสดงวันที่ปัจจุบัน
3. สร้าง module เองที่มี function คำนวณภาษี

## Mini challenge

สร้าง password generator ด้วย `random` และ string ของตัวอักษร/ตัวเลข

## สรุป

Module ทำให้คุณใช้ความสามารถที่มีอยู่แล้วและแยกโค้ดให้เป็นระเบียบมากขึ้น
