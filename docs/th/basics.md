# พื้นฐาน Python

บทนี้คือรากฐานของทุกโปรแกรม: ตัวแปร ชนิดข้อมูล comment และการแสดงผล

## ตัวแปร

ตัวแปรคือชื่อที่ใช้เก็บค่า

```python
name = "Mali"
age = 16
height = 165.5
is_student = True
```

Python ไม่ต้องประกาศชนิดข้อมูลล่วงหน้า โปรแกรมจะดูจากค่าที่ใส่ให้ตัวแปร

## ชนิดข้อมูลพื้นฐาน

| ชนิด | ตัวอย่าง | ใช้ทำอะไร |
| --- | --- | --- |
| `str` | `"hello"` | ข้อความ |
| `int` | `10` | จำนวนเต็ม |
| `float` | `3.14` | ทศนิยม |
| `bool` | `True` | จริง/เท็จ |

ตรวจชนิดข้อมูลด้วย `type()`:

```python
print(type("hello"))
print(type(10))
```

## การแสดงผล

ใช้ `print()` เพื่อแสดงข้อมูล

```python
name = "Mali"
print("Hello", name)
print("Hello " + name)
print(f"Hello {name}")
```

ใช้ `+` ต่อข้อความกับตัวแปรข้อความได้ เช่น `"Hello " + name`
`f-string` ช่วยแทรกค่าตัวแปรในข้อความ อ่านง่ายและใช้บ่อยมาก

## Comment

Comment คือข้อความที่ Python ไม่รัน ใช้อธิบายโค้ดที่อาจอ่านยาก

```python
# คำนวณราคาหลังลด 10%
price = 100
final_price = price * 0.9
```

## การตั้งชื่อตัวแปร

ใช้ `snake_case`:

```python
student_name = "Anan"
total_score = 95
```

หลีกเลี่ยงชื่อสั้นเกินไป เช่น `x` ถ้าไม่ใช่โค้ดทดลอง เพราะอ่านยาก

## ข้อผิดพลาดที่พบบ่อย

```python
age = "16"
print(age + 1)  # error เพราะข้อความบวกเลขไม่ได้
```

แก้โดยแปลงชนิดข้อมูล:

```python
age = int("16")
print(age + 1)
```

## แบบฝึกหัด

1. สร้างตัวแปร `name`, `age`, `school`, และ `favorite_subject` แล้วใส่ค่าตัวอย่างของตัวเอง
2. ใช้ f-string แสดงประโยคเดียวที่มีค่าจากตัวแปรทั้ง 4 ตัว
3. ใช้ `type()` ตรวจชนิดข้อมูลของตัวแปรอย่างน้อย 3 ตัว และแสดงผลด้วย `print()`

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

สร้างตัวแปรให้ครบตามโจทย์: ชื่อ อายุ โรงเรียน และวิชาที่ชอบ

```python
name = "Mali"
age = 16
school = "Python School"
favorite_subject = "ศิลปะ"
```

### เฉลยข้อ 2

ใช้ f-string รวมค่าจากตัวแปรเป็นประโยคเดียว

```python
print(f"{name} อายุ {age} ปี เรียนที่ {school} และชอบวิชา{favorite_subject}")
```


### เฉลยข้อ 3

ใช้ `type()` เพื่อตรวจชนิดข้อมูลของค่าอย่างน้อย 3 ค่า

```python
print(type(name))
print(type(age))
print(type(favorite_subject))
```

</details>

## Mini challenge

เขียนโปรแกรมที่มีตัวแปร `name` และ `age` จากนั้นคำนวณ `future_age = age + 5` แล้วแสดงประโยคว่าอีก 5 ปีคนนั้นจะอายุเท่าไร

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

เก็บอายุปัจจุบันไว้ในตัวแปร แล้วสร้างตัวแปรใหม่สำหรับอายุในอีก 5 ปี

```python
name = "Mali"
age = 16
future_age = age + 5

print(f"อีก 5 ปี {name} จะอายุ {future_age} ปี")
```

</details>

## สรุป

คุณได้เรียนรู้ตัวแปร ชนิดข้อมูล `print()` f-string และการตั้งชื่อที่อ่านง่ายแล้ว
