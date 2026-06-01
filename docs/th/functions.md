# Functions

Function คือกล่องคำสั่งที่ตั้งชื่อได้ ใช้ซ้ำได้ และช่วยให้โค้ดอ่านง่ายขึ้น

## สร้าง function

```python
def greet():
    print("สวัสดี")

greet()
```

## Parameters

```python
def greet(name):
    print(f"สวัสดี {name}")

greet("Mali")
```

## Return value

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)
```

ใช้ `return` เมื่อ function ควรส่งค่ากลับไปให้ส่วนอื่นใช้ต่อ

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

1. สร้าง function แปลง Celsius เป็น Fahrenheit
2. สร้าง function คำนวณพื้นที่สี่เหลี่ยม
3. สร้าง function ตรวจว่าเลขเป็นคู่หรือคี่

## Mini challenge

แยกโปรแกรม calculator ให้แต่ละ operation เป็น function เช่น `add`, `subtract`, `multiply`, `divide`

## สรุป

Function ทำให้โค้ดเป็นระเบียบ ลดการซ้ำ และเป็นก้าวสำคัญสู่การเขียนโปรแกรมขนาดใหญ่
