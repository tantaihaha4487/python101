# Object-Oriented Programming

OOP คือแนวคิดการจัดโค้ดรอบ ๆ สิ่งที่เรียกว่า object เหมาะเมื่อข้อมูลและพฤติกรรมเกี่ยวข้องกัน

## Class และ Object

Class คือแบบพิมพ์เขียว Object คือสิ่งที่สร้างจาก class

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

`__init__` ทำงานตอนสร้าง object ใช้กำหนดค่าเริ่มต้น

## self

`self` หมายถึง object ตัวปัจจุบัน ทำให้ method เข้าถึงข้อมูลของ object ได้

## Method

Method คือ function ที่อยู่ใน class

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
            print("เงินไม่พอ")
```

## ควรใช้ OOP เมื่อไร

ใช้เมื่อสิ่งที่เขียนมีข้อมูลและพฤติกรรมร่วมกัน เช่น นักเรียน บัญชีธนาคาร สินค้า เกม หรือ task ใน todo app

## ข้อผิดพลาดที่พบบ่อย

- ลืม `self` ใน method
- เรียก class โดยไม่ใส่ argument ที่ `__init__` ต้องการ
- ใช้ class ทั้งที่ function ธรรมดาก็พอ

## แบบฝึกหัด

1. สร้าง class `Book` ที่มี title และ author
2. สร้าง class `TodoItem` ที่มี title และ completed
3. เพิ่ม method สำหรับเปลี่ยนสถานะ todo เป็นเสร็จแล้ว

## Mini challenge

สร้าง class `BankAccount` ที่ฝาก ถอน และแสดงยอดเงินได้ พร้อมตรวจว่ายอดถอนต้องไม่เกินยอดเงิน

## สรุป

OOP ช่วยจัดข้อมูลกับพฤติกรรมให้อยู่ด้วยกัน แต่ควรใช้เมื่อช่วยให้โค้ดชัดขึ้นจริง ๆ
