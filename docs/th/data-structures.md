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

## Tuple

Tuple คล้าย list แต่แก้ไขไม่ได้ เหมาะกับข้อมูลที่ไม่ควรเปลี่ยน

```python
point = (10, 20)
print(point[0])
```

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
```

## Set

Set เก็บข้อมูลไม่ซ้ำ และไม่สนใจลำดับ

```python
tags = {"python", "beginner", "python"}
print(tags)
```

## Slicing

```python
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])
print(numbers[:3])
print(numbers[-1])
```

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

## Mini challenge

สร้างโปรแกรม contact book แบบง่าย เก็บชื่อและเบอร์โทรใน dictionary

## สรุป

Data structure ช่วยจัดข้อมูลให้เหมาะกับงาน เป็นพื้นฐานสำคัญก่อนทำโปรเจกต์จริง
