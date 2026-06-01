# Error Handling

Error เป็นเรื่องปกติของการเขียนโปรแกรม เป้าหมายไม่ใช่การไม่เจอ error เลย แต่คืออ่าน error ออกและจัดการอย่างเหมาะสม

## try และ except

```python
try:
    age = int(input("อายุ: "))
    print(f"คุณอายุ {age}")
except ValueError:
    print("กรุณากรอกตัวเลข")
```

ถ้าโค้ดใน `try` เกิด `ValueError` โปรแกรมจะไปทำงานใน `except`

## finally

```python
try:
    number = int(input("เลข: "))
except ValueError:
    print("ไม่ใช่เลข")
finally:
    print("จบการทำงาน")
```

`finally` ทำงานเสมอ ไม่ว่าจะ error หรือไม่

## Common errors

| Error | สาเหตุที่พบบ่อย |
| --- | --- |
| `ValueError` | แปลงค่าไม่ได้ เช่น `int("abc")` |
| `TypeError` | ใช้ชนิดข้อมูลผิด เช่น string + int |
| `NameError` | เรียกชื่อตัวแปรที่ไม่มี |
| `IndexError` | index เกินขนาด list |
| `FileNotFoundError` | เปิดไฟล์ที่ไม่มี |

## อ่าน traceback

Traceback จะบอกไฟล์ บรรทัด และชนิด error ให้ดูจากบรรทัดล่างสุดก่อน แล้วค่อยย้อนขึ้นไปดูตำแหน่งในโค้ด

## ข้อผิดพลาดที่พบบ่อย

- ใช้ `except:` กว้างเกินไปจนไม่รู้ว่า error อะไร
- ซ่อน error ทั้งหมดด้วยข้อความทั่วไป
- ไม่แก้สาเหตุจริงของ error

## แบบฝึกหัด

1. รับตัวเลขจากผู้ใช้และจัดการกรณีกรอกผิด
2. อ่านไฟล์และแสดงข้อความถ้าไฟล์ไม่มี
3. สร้าง calculator ที่ตรวจหารด้วยศูนย์

## Mini challenge

ปรับเกมทายเลขให้ไม่พังเมื่อผู้ใช้กรอกตัวอักษรแทนตัวเลข

## สรุป

Error handling ทำให้โปรแกรมเป็นมิตรกับผู้ใช้และช่วยให้คุณ debug ได้เป็นระบบ
