# Object-Oriented Programming

OOP คือแนวคิดการจัดโค้ดรอบ ๆ สิ่งที่เรียกว่า object

ให้คิดว่า object คือ "สิ่งหนึ่งชิ้น" ที่มีทั้งข้อมูลและสิ่งที่ทำได้ เช่น นักเรียนมีชื่อกับคะแนน และสั่งให้แสดงข้อมูลหรือตรวจว่าผ่านได้

## Class และ Object

Class คือแบบพิมพ์เขียว ส่วน object คือของจริงที่สร้างจากแบบพิมพ์เขียวนั้น

| คำ | ความหมาย | ตัวอย่าง |
| --- | --- | --- |
| Class | แบบพิมพ์เขียว | `Student` |
| Object | ของจริงที่สร้างจาก class | `mali`, `anan` |
| Attribute | ข้อมูลของ object | `name`, `score` |
| Method | สิ่งที่ object ทำได้ | `show_info()` |

เริ่มจากตัวอย่างนักเรียน:

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def show_info(self):
        print(f"{self.name} ได้ {self.score} คะแนน")

    def is_passed(self):
        return self.score >= 50

mali = Student("Mali", 90)
anan = Student("Anan", 45)

mali.show_info()
anan.show_info()

print(mali.is_passed())
print(anan.is_passed())
```

ในตัวอย่างนี้ `mali` และ `anan` เป็น object คนละตัวกัน จึงเก็บ `name` และ `score` คนละชุดได้

## __init__

`__init__` ทำงานทันทีตอนสร้าง object ใช้กำหนดค่าเริ่มต้นให้ object

```python
mali = Student("Mali", 90)
```

บรรทัดนี้ส่งค่าเข้า `__init__` แบบนี้:

| ค่าที่ส่งเข้าไป | parameter ที่รับ | เก็บไว้ใน object |
| --- | --- | --- |
| `"Mali"` | `name` | `self.name` |
| `90` | `score` | `self.score` |

ดังนั้น `mali.name` จะได้ `"Mali"` และ `mali.score` จะได้ `90`

## self

`self` หมายถึง object ตัวปัจจุบันที่กำลังใช้งาน method นั้นอยู่

เมื่อเขียน:

```python
mali.show_info()
```

Python จะมองเหมือนว่า `mali` ถูกส่งเข้าไปเป็น `self` ดังนั้นใน method จึงใช้ `self.name` และ `self.score` เพื่ออ่านข้อมูลของ `mali`

ถ้าเขียน:

```python
anan.show_info()
```

`self` จะหมายถึง `anan` แทน

## Method

Method คือ function ที่อยู่ใน class ใช้ทำงานกับข้อมูลของ object

ตัวอย่างนี้ `mark_done()` เปลี่ยนข้อมูลใน object จากยังไม่เสร็จเป็นเสร็จแล้ว:

```python
class TodoItem:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def mark_done(self):
        self.completed = True

    def show_status(self):
        if self.completed:
            print(f"{self.title}: เสร็จแล้ว")
        else:
            print(f"{self.title}: ยังไม่เสร็จ")

task = TodoItem("ฝึกเขียน OOP")
task.show_status()
task.mark_done()
task.show_status()
```

สิ่งสำคัญคือ method ไม่ได้แค่แสดงผล แต่สามารถเปลี่ยนข้อมูลของ object ได้ เช่น `self.completed = True`

## ควรใช้ OOP เมื่อไร

ใช้ OOP เมื่อมีข้อมูลหลายชิ้นที่เป็นชนิดเดียวกัน และแต่ละชิ้นมีพฤติกรรมของตัวเอง เช่น นักเรียนหลายคน บัญชีธนาคารหลายบัญชี สินค้าหลายชิ้น ตัวละครในเกม หรือ task หลายงานใน todo app

ถ้าโปรแกรมมีแค่คำนวณค่าเดียวแล้วจบ function ธรรมดาอาจอ่านง่ายกว่า class

## ข้อผิดพลาดที่พบบ่อย

- ลืม `self` ใน method
- เรียก class โดยไม่ใส่ argument ที่ `__init__` ต้องการ
- ใช้ class ทั้งที่ function ธรรมดาก็พอ

## แบบฝึกหัด

1. สร้าง class `Book` ที่มี title และ author
2. สร้าง class `TodoItem` ที่มี title และ completed
3. เพิ่ม method สำหรับเปลี่ยนสถานะ todo เป็นเสร็จแล้ว

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

`Book` เก็บข้อมูลหนังสือ 2 อย่างคือ `title` และ `author`

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
```

### เฉลยข้อ 2

`TodoItem` เก็บชื่องานและเริ่มสถานะ `completed` เป็น `False`

```python
class TodoItem:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def mark_done(self):
        self.completed = True
```

### เฉลยข้อ 3

method `mark_done()` เปลี่ยนสถานะ todo จาก `False` เป็น `True`

```python
todo = TodoItem("ฝึกเขียน class")
print(todo.completed)
todo.mark_done()
print(todo.completed)
```

### ตัวอย่างทดสอบ

ทดสอบการสร้าง object ของ `Book`

```python
book = Book("Python Basics", "Thanachot P.")
print(book.title)
print(book.author)
```

</details>

## Mini challenge

สร้าง class `BankAccount` ที่ฝาก ถอน และแสดงยอดเงินได้ พร้อมตรวจว่ายอดถอนต้องไม่เกินยอดเงิน

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ตัวอย่างนี้ครอบคลุมฝากเงินปกติ ถอนเงินปกติ ถอนเกินยอด และฝาก/ถอนยอดที่ไม่ถูกต้อง

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount <= 0:
            print("ยอดฝากต้องมากกว่า 0")
            return
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            print("ยอดถอนต้องมากกว่า 0")
        elif amount > self.balance:
            print("ยอดเงินไม่พอ")
        else:
            self.balance -= amount

    def show_balance(self):
        print(f"{self.owner} มียอดเงิน {self.balance} บาท")

account = BankAccount("Mali", 100)
account.deposit(50)
account.withdraw(30)
account.withdraw(500)
account.withdraw(0)
account.show_balance()
```

</details>

## สรุป

OOP ช่วยจัดข้อมูลกับพฤติกรรมให้อยู่ด้วยกัน แต่ควรใช้เมื่อช่วยให้โค้ดชัดขึ้นจริง ๆ
