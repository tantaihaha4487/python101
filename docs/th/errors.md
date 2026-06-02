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

ตัวอย่างเช่น ถ้าเขียน `print(age + 1)` โดยที่ `age` เป็นข้อความ:

```text
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(age + 1)
TypeError: can only concatenate str (not "int") to str
```

ให้อ่านบรรทัดล่างสุดก่อน: `TypeError` บอกว่าเราเอา string ไปบวกกับ int ไม่ได้ จากนั้นดู `line 2` เพื่อกลับไปแก้บรรทัดที่ผิด

## ข้อผิดพลาดที่พบบ่อย

- ใช้ `except:` กว้างเกินไปจนไม่รู้ว่า error อะไร
- ซ่อน error ทั้งหมดด้วยข้อความทั่วไป
- ไม่แก้สาเหตุจริงของ error

## แบบฝึกหัด

1. รับค่าจากผู้ใช้แล้วแปลงเป็น `int`; ถ้าผู้ใช้กรอกตัวอักษร ให้จับ `ValueError` และแสดงข้อความว่าให้กรอกตัวเลข
2. อ่านไฟล์ `data.txt`; ถ้าไฟล์ไม่มี ให้จับ `FileNotFoundError` และแสดงข้อความที่เข้าใจง่าย
3. รับเลข 2 ตัวแล้วหารกัน; ต้องจับทั้งกรณีกรอกไม่ใช่ตัวเลข (`ValueError`) และกรณีหารด้วยศูนย์ (`ZeroDivisionError`)

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

ใช้ `try/except ValueError` เพื่อครอบคลุมกรณีผู้ใช้กรอกตัวอักษรแทนตัวเลข

```python
try:
    number = int(input("กรอกตัวเลข: "))
    print(f"ตัวเลขคือ {number}")
except ValueError:
    print("กรุณากรอกเป็นตัวเลขเท่านั้น")
```

### เฉลยข้อ 2

ใช้ `except FileNotFoundError` เพื่อบอกผู้ใช้เมื่อไฟล์ไม่มีอยู่จริง

```python
try:
    with open("data.txt", "r", encoding="utf-8") as file:
        print(file.read())
except FileNotFoundError:
    print("ไม่พบไฟล์ data.txt")
```

### เฉลยข้อ 3

แยก `ValueError` สำหรับข้อมูลที่ไม่ใช่เลข และ `ZeroDivisionError` สำหรับหารด้วยศูนย์

```python
try:
    first = float(input("เลขตัวแรก: "))
    second = float(input("เลขตัวที่สอง: "))
    print(first / second)
except ValueError:
    print("กรุณากรอกตัวเลข")
except ZeroDivisionError:
    print("หารด้วยศูนย์ไม่ได้")
```

</details>

## Mini challenge

ปรับเกมทายเลข 1-10 ให้รับ input ใน `try`; ถ้าผู้ใช้กรอกตัวอักษร เช่น `abc` ให้แสดง `กรุณากรอกตัวเลข`, กลับไปถามใหม่ด้วย `continue`, และไม่นับเป็นจำนวนครั้งที่ทาย

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ใช้ `continue` หลังกรอกผิด เพื่อกลับไปรับข้อมูลใหม่โดยไม่นับเป็นจำนวนครั้งที่ทาย

```python
secret = 7
attempts = 0

while True:
    try:
        guess = int(input("ทายเลข 1-10: "))
    except ValueError:
        print("กรุณากรอกตัวเลข")
        continue

    attempts += 1

    if guess == secret:
        print(f"ถูกต้อง ใช้ {attempts} ครั้ง")
        break
    if guess < secret:
        print("น้อยไป")
    else:
        print("มากไป")
```

</details>

## สรุป

Error handling ทำให้โปรแกรมเป็นมิตรกับผู้ใช้และช่วยให้คุณ debug ได้เป็นระบบ
