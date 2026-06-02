# Data Structures

Data structure คือวิธีเก็บข้อมูลหลายค่ารวมกัน Python มีเครื่องมือพื้นฐานที่ใช้บ่อยคือ list, tuple, dictionary และ set

## List

List เก็บข้อมูลเป็นลำดับ แก้ไขได้

```python
scores = [80, 75, 90]
scores.append(88)
print(scores[0])
print(len(scores))
```

ผลลัพธ์:

```text
80
4
```

## Tuple

Tuple คล้าย list แต่แก้ไขไม่ได้ เหมาะกับข้อมูลที่ไม่ควรเปลี่ยน

```python
point = (10, 20)
print(point[0])
```

ผลลัพธ์คือ `10` เพราะ index เริ่มนับจาก 0

## Dictionary

Dictionary เก็บข้อมูลแบบ key-value

```python
student = {
    "name": "Mali",
    "age": 16,
    "grade": "A"
}

print(student["name"])
student["age"] = 17
print(student["age"])
```

ผลลัพธ์:

```text
Mali
17
```

## Set

Set เก็บข้อมูลไม่ซ้ำ และไม่สนใจลำดับ

```python
tags = {"python", "beginner", "python"}
print(tags)
```

คำว่า `"python"` ซ้ำกัน แต่ set จะเก็บไว้ครั้งเดียว ผลลัพธ์อาจเรียงลำดับไม่เหมือนกันทุกครั้ง เช่น:

```text
{'python', 'beginner'}
```

## Slicing

```python
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])
print(numbers[:3])
print(numbers[-1])
```

ผลลัพธ์:

```text
[20, 30, 40]
[10, 20, 30]
50
```

`numbers[1:4]` หมายถึงเริ่มที่ index 1 และหยุดก่อน index 4

## เลือกใช้อะไรดี

| ต้องการ | ใช้ |
| --- | --- |
| รายการที่แก้ไขได้ | list |
| ค่าคงที่เป็นชุด | tuple |
| ข้อมูลมีชื่อกำกับ | dictionary |
| ข้อมูลไม่ซ้ำ | set |

## แบบฝึกหัด

1. สร้าง list รายชื่อเพื่อน แล้วเพิ่มชื่อใหม่
2. สร้าง dictionary เก็บข้อมูลหนังสือ 1 เล่ม
3. รับคำจากผู้ใช้หลายคำ แล้วใช้ set หาคำที่ไม่ซ้ำ

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

ใช้ list เมื่อข้อมูลเป็นรายการที่เพิ่มลำดับใหม่ได้

```python
friends = ["Mali", "Anan", "Nok"]
friends.append("Som")
print(friends)
```

ผลลัพธ์: `['Mali', 'Anan', 'Nok', 'Som']`

### เฉลยข้อ 2

ใช้ dictionary เมื่อข้อมูลมีชื่อกำกับ เช่น `title`, `author`, `pages`

```python
book = {
    "title": "Python Adventure",
    "author": "Mali",
    "pages": 120
}
print(book["title"])
```

ผลลัพธ์: `Python Adventure`

### เฉลยข้อ 3

เก็บคำทั้งหมดใน list ก่อน แล้วแปลงเป็น set เพื่อตัดค่าที่ซ้ำออก

```python
words = []
for round_number in range(5):
    words.append(input("พิมพ์คำ: "))

unique_words = set(words)
print(unique_words)
```

</details>

## Mini challenge

สร้างโปรแกรม contact book แบบง่าย เก็บชื่อและเบอร์โทรใน dictionary

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ใช้ dictionary เพราะชื่อสามารถเป็น key และเบอร์โทรเป็น value ได้ ตัวอย่างนี้ครอบคลุมทั้งกรณีเจอชื่อเดิมและเพิ่มชื่อใหม่

```python
contacts = {
    "Mali": "080-111-1111",
    "Anan": "080-222-2222"
}

name = input("ค้นหาชื่อ: ")
if name in contacts:
    print(f"เบอร์ของ {name}: {contacts[name]}")
else:
    phone = input("ยังไม่มีเบอร์นี้ เพิ่มเบอร์ใหม่: ")
    contacts[name] = phone
    print(contacts)
```

</details>

## สรุป

Data structure ช่วยจัดข้อมูลให้เหมาะกับงาน เป็นพื้นฐานสำคัญก่อนทำโปรเจกต์จริง
