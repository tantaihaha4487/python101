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

`.index()` บอกตำแหน่งของค่าที่ค้นหา และเพราะ index เริ่มนับที่ 0 จึงต้อง `+ 1` เมื่ออยากได้ลำดับที่คนอ่านเข้าใจ

```python
stations = ["Mo Chit", "Saphan Khwai", "Ari", "Sanam Pao", "Victory Monument"]

print(stations.index("Ari"))
print(f"Ari เป็นสถานีที่ {stations.index('Ari') + 1}")
```

ผลลัพธ์:

```text
2
Ari เป็นสถานีที่ 3
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

Dictionary มีคำสั่งช่วยดูข้อมูลภายใน และใช้ `in` ตรวจว่ามี key นั้นอยู่หรือไม่

```python
stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}

print(stock["eraser"])
print(stock.keys())
print(stock.values())
print("glue" in stock)
print("pen" in stock)
```

ผลลัพธ์:

```text
9
dict_keys(['pen', 'ruler', 'eraser', 'notebook'])
dict_values([4, 2, 9, 6])
False
True
```

`in` ของ dictionary ตรวจเฉพาะ **key** ไม่ได้ตรวจ value และการเรียก key ที่ไม่มีอยู่จะเกิด `KeyError` ทันที เช่น `stock["glue"]` หรือ `stock[0]` เพราะ dictionary ไม่ได้เรียกด้วยตำแหน่งเหมือน list

ถ้าไม่อยากให้โปรแกรมพังเมื่อไม่มี key ให้ใช้ `.get()` พร้อมค่าเริ่มต้น

```python
print(stock.get("glue", 0))
```

ผลลัพธ์:

```text
0
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

`range()` สร้าง list ได้ด้วย `list()` แล้วนำมา slice ต่อได้เลย

```python
numbers = list(range(0, 51, 5))
print(numbers)
print(numbers[1:6])
```

ผลลัพธ์:

```text
[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
[5, 10, 15, 20, 25]
```

slicing ใช้กับข้อความได้เหมือนกัน `[-3:]` คือเอาสามตัวท้าย

```python
student_id = "6612345678"
print(student_id[-3:])
```

ผลลัพธ์:

```text
678
```

## รวมและจัดเรียงข้อมูลใน list

`sum()`, `len()`, `max()` และ `min()` ใช้สรุปข้อมูลใน list ได้ทันที

```python
scores = [72, 95, 88, 60]

print(sum(scores))
print(max(scores))
print(min(scores))
print(sum(scores) / len(scores))
```

ผลลัพธ์:

```text
315
95
60
78.75
```

`sorted()` คืน list ใหม่ที่เรียงแล้ว ส่วน `.sort()` เรียงใน list เดิมและคืนค่า `None`

```python
names = ["Nok", "Anan", "Mali", "Som"]

print(sorted(names))
print(names)
```

ผลลัพธ์:

```text
['Anan', 'Mali', 'Nok', 'Som']
['Nok', 'Anan', 'Mali', 'Som']
```

เมื่อมี list สองชุดที่เรียงตรงกัน เราหาชื่อของคนที่ได้คะแนนสูงสุดได้ด้วย `.index(max(...))`

```python
names = ["Nok", "Anan", "Mali", "Som"]
scores = [72, 95, 88, 60]

print(names[scores.index(max(scores))])
```

ผลลัพธ์:

```text
Anan
```

## แปลงข้อความเป็น list

`.split()` ตัดข้อความเป็น list โดยใช้ช่องว่างเป็นตัวแบ่ง หรือระบุตัวแบ่งเองก็ได้

```python
print("23 99 10".split())
print("p01,p03,p01".split(","))
```

ผลลัพธ์:

```text
['23', '99', '10']
['p01', 'p03', 'p01']
```

ค่าที่ได้จาก `.split()` เป็นข้อความเสมอ ถ้าจะคำนวณต้องแปลงเป็นตัวเลขก่อน `map()` ช่วยแปลงทุกตัวพร้อมกัน

```python
parts = "23 99 10".split()

print(list(map(int, parts)))
```

ผลลัพธ์:

```text
[23, 99, 10]
```

ถ้ายังไม่คุ้นกับ `map()` เขียนเป็น loop ที่ให้ผลเหมือนกันก็ได้

```python
numbers = []
for part in "23 99 10".split():
    numbers.append(int(part))

print(numbers)
```

เมื่อข้อมูลคั่นด้วย comma มักมีช่องว่างติดมาด้วย ใช้ `.strip()` ตัดออกก่อนเสมอ

```python
parts = "p01, p03, p01".split(",")
print(parts)
print([part.strip() for part in parts])
```

ผลลัพธ์:

```text
['p01', ' p03', ' p01']
['p01', 'p03', 'p01']
```

## สร้าง dictionary ด้วย loop

เมื่อต้องค้นข้อมูลด้วยรหัสสั้น ๆ ให้เก็บเป็น dictionary โดยใช้รหัสนั้นเป็น key ตัวอย่างนี้ใช้เลข 3 หลักท้ายของรหัสนักศึกษาเป็น key

```python
student_ids = ["6612345001", "6612345002", "6612345003"]
lookup = {}

for student_id in student_ids:
    lookup[student_id[-3:]] = student_id

print(lookup)
print(lookup["002"])
print(lookup.get("999", "ไม่พบรหัสนี้"))
```

ผลลัพธ์:

```text
{'001': '6612345001', '002': '6612345002', '003': '6612345003'}
6612345002
ไม่พบรหัสนี้
```

## เลือกใช้อะไรดี

| ต้องการ | ใช้ |
| --- | --- |
| รายการที่แก้ไขได้ | list |
| ค่าคงที่เป็นชุด | tuple |
| ข้อมูลมีชื่อกำกับ | dictionary |
| ข้อมูลไม่ซ้ำ | set |
| จับคู่ข้อมูลสองชุด | dictionary |

## ข้อผิดพลาดที่พบบ่อย

- ใช้ index เกินขอบเขตของ list ทำให้เกิด `IndexError`
- เรียก key ที่ไม่มีใน dictionary ทำให้เกิด `KeyError` ถ้าไม่แน่ใจให้ใช้ `.get()`
- เขียน `names = names.sort()` แล้วได้ `None` เพราะ `.sort()` ไม่ได้คืน list ใหม่ ถ้าต้องการ list ใหม่ให้ใช้ `sorted()`
- ลืมว่าค่าจาก `.split()` เป็นข้อความ จึงต้องแปลงเป็น `int` หรือ `float` ก่อนคำนวณ
- ลืม `.strip()` เมื่อข้อมูลคั่นด้วย comma ทำให้มีช่องว่างติดมากับค่า

## แบบฝึกหัด

1. กำหนด `numbers = list(range(0, 51, 5))` แล้วเขียนผลของ `numbers[1:6]` และค่าเฉลี่ยของ slice นั้น
2. กำหนด `stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}` แล้วเขียนผลของ `stock["eraser"]`, `stock[0]`, `stock.keys()`, `stock.values()`, `"glue" in stock` และ `"pen" in stock`
3. กำหนด `members = ["Nok", "Anan", "Mali", "Som"]` และ `points = [72, 95, 88, 60]` รับชื่อสมาชิกใหม่และรับคะแนนเป็นข้อความคั่นด้วยช่องว่าง แล้วแสดงจำนวนสมาชิกทั้งหมด ชื่อคนที่ได้คะแนนสูงสุด และรายชื่อทั้งหมดเรียงตามตัวอักษร

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

slice เริ่มที่ index 1 และหยุดก่อน index 6 จากนั้นหาค่าเฉลี่ยด้วย `sum()` หารด้วย `len()`

```python
numbers = list(range(0, 51, 5))
selected = numbers[1:6]

print(selected)
print(sum(selected) / len(selected))
```

ผลลัพธ์:

```text
[5, 10, 15, 20, 25]
15.0
```

### เฉลยข้อ 2

`stock[0]` เกิด `KeyError` เพราะ dictionary เรียกด้วย key ไม่ใช่ตำแหน่ง และ `in` ตรวจเฉพาะ key

```python
stock = {"pen": 4, "ruler": 2, "eraser": 9, "notebook": 6}

print(stock["eraser"])
print(stock.keys())
print(stock.values())
print("glue" in stock)
print("pen" in stock)
```

ผลลัพธ์:

```text
9
dict_keys(['pen', 'ruler', 'eraser', 'notebook'])
dict_values([4, 2, 9, 6])
False
True
```

ส่วน `stock[0]` จะได้ `KeyError: 0`

### เฉลยข้อ 3

ใช้ `.split()` แยกคะแนนแล้ว `map(int, ...)` แปลงเป็นตัวเลข จากนั้นหาคนคะแนนสูงสุดด้วย `.index(max(...))`

```python
members = ["Nok", "Anan", "Mali", "Som"]
points = [72, 95, 88, 60]

members.append(input("ชื่อสมาชิกใหม่: "))
points.extend(map(int, input("คะแนนใหม่ (คั่นด้วยช่องว่าง): ").split()))

print(f"สมาชิกทั้งหมด {len(members)} คน")
print(f"คะแนนสูงสุด: {members[points.index(max(points))]}")
print(sorted(members))
```

</details>

## Mini challenge

สร้างโปรแกรมคิดเงินในร้านค้า รับข้อมูลสินค้า 3 รายการ แต่ละบรรทัดเป็น `รหัส, ราคา` เก็บเป็น dictionary จากนั้นรับรายการในตะกร้าเป็นรหัสคั่นด้วย comma แล้วแสดงราคารวม โดยสินค้าชิ้นเดิมที่หยิบซ้ำต้องถูกคิดเงินทุกครั้ง

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ใช้ `.split(",")` แยกข้อมูล `.strip()` ตัดช่องว่าง และ `float()` แปลงราคา จากนั้นวน loop ตะกร้าเพื่อบวกราคาทีละชิ้น สินค้าซ้ำจึงถูกบวกซ้ำโดยอัตโนมัติ

```python
prices = {}

for number in range(3):
    line = input(f"สินค้าชิ้นที่ {number + 1} (รหัส, ราคา): ")
    code, price = line.split(",")
    prices[code.strip()] = float(price.strip())

cart = input("ตะกร้าสินค้า (รหัสคั่นด้วย comma): ").split(",")

total = 0
for code in cart:
    total += prices[code.strip()]

print(f"ราคารวม {total:.2f} บาท")
```

ตัวอย่างการรัน:

```text
สินค้าชิ้นที่ 1 (รหัส, ราคา): p01, 12.50
สินค้าชิ้นที่ 2 (รหัส, ราคา): p02, 8.00
สินค้าชิ้นที่ 3 (รหัส, ราคา): p03, 25.75
ตะกร้าสินค้า (รหัสคั่นด้วย comma): p01,p03,p01
ราคารวม 50.75 บาท
```

</details>

## สรุป

Data structure ช่วยจัดข้อมูลให้เหมาะกับงาน คุณใช้ slicing ตัดข้อมูล ใช้ `sum()` กับ `sorted()` สรุปและจัดเรียง ใช้ `.split()` แปลงข้อความเป็น list และใช้ dictionary ค้นข้อมูลด้วย key ได้แล้ว ซึ่งเป็นพื้นฐานสำคัญก่อนทำโปรเจกต์จริง
