# Data Structures

Data structure คือรูปแบบการเก็บข้อมูลหลายค่าพร้อมกัน Python มีชนิดข้อมูลพื้นฐานที่ใช้บ่อยคือ list, tuple, dictionary และ set

## List

List เก็บข้อมูลเป็นลำดับ แก้ไขได้ เหมาะกับข้อมูลที่ต้องเพิ่ม ลบ หรือเปลี่ยนค่าได้เรื่อย ๆ

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

Tuple คล้าย list แต่แก้ไขไม่ได้ เหมาะกับข้อมูลที่ไม่ควรเปลี่ยน เช่น พิกัด หรือค่าคงที่

```python
point = (10, 20)
print(point[0])
```

ผลลัพธ์คือ `10` เพราะ index เริ่มนับจาก 0

## Dictionary

Dictionary เก็บข้อมูลแบบ key-value ใช้เมื่อเราต้องการเรียกข้อมูลด้วยชื่อแทนตำแหน่ง

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

Set เก็บข้อมูลไม่ซ้ำ และไม่สนใจลำดับ เหมาะกับการตัดค่าซ้ำออกจากข้อมูล

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

`numbers[1:4]` หมายถึงเริ่มที่ index 1 และหยุดก่อน index 4 ดังนั้นจะได้ค่าตำแหน่ง 1, 2, และ 3

## เลือกใช้อะไรดี

| ต้องการ | ใช้ |
| --- | --- |
| รายการที่แก้ไขได้ | list |
| ค่าคงที่เป็นชุด | tuple |
| ข้อมูลมีชื่อกำกับ | dictionary |
| ข้อมูลไม่ซ้ำ | set |

## แบบฝึกหัด

1. สร้าง list ชื่อ `friends` ที่มีอย่างน้อย 3 ชื่อ จากนั้นใช้ `.append()` เพิ่มชื่ออีก 1 ชื่อ แล้ว `print()` list ทั้งหมด
2. สร้าง dictionary ชื่อ `book` ที่มี key `title`, `author`, และ `pages` แล้ว `print()` ค่าใน key `title`
3. ใช้ loop รับคำจากผู้ใช้ 5 คำ เก็บใน list แล้วแปลงเป็น set เพื่อดูว่ามีคำซ้ำอะไรบ้าง

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

ใช้ list เมื่อข้อมูลเป็นรายการที่เรียงลำดับและเพิ่มข้อมูลใหม่ได้

```python
friends = ["Mali", "Anan", "Nok"]
friends.append("Som")
print(friends)
```

ผลลัพธ์: `['Mali', 'Anan', 'Nok', 'Som']`

### เฉลยข้อ 2

ใช้ dictionary เมื่อข้อมูลมีชื่อกำกับ เช่น `title`, `author`, `pages` และต้องการดึงค่าด้วย key

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

สร้าง contact book ด้วย dictionary โดยให้ชื่อเป็น key และเบอร์โทรเป็น value รับชื่อที่ต้องการค้นหา ถ้ามีชื่อให้แสดงเบอร์ ถ้าไม่มีให้รับเบอร์ใหม่แล้วเพิ่มเข้า dictionary จากนั้นแสดงรายการที่เพิ่มล่าสุดด้วย

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
