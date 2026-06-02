# Loops

Loop ใช้ทำงานซ้ำ เช่น แสดงตัวเลข 1-100 ตรวจรายการสินค้า หรือถามข้อมูลจนกว่าผู้ใช้จะพิมพ์ถูก

## for loop

ใช้เมื่อรู้จำนวนรอบหรือวนผ่านรายการ

```python
for number in range(1, 6):
    print(number)
```

`range(1, 6)` ได้เลข 1 ถึง 5 เพราะค่าสุดท้ายไม่รวม

## ภาพรวม for loop

```mermaid
flowchart TD
  A[เริ่ม loop] --> B[หยิบค่าถัดไปจาก range หรือ list]
  B --> C{ยังมีค่าอยู่ไหม?}
  C -->|มี| D[ทำงานใน block ของ loop]
  D --> B
  C -->|ไม่มี| E[ออกจาก loop]
```

แผนภาพนี้อธิบายว่า `for` จะหยิบค่าทีละตัว ทำงานหนึ่งรอบ แล้วกลับไปหยิบค่าถัดไปจนหมด

## while loop

ใช้เมื่อยังไม่รู้จำนวนรอบ แต่มีเงื่อนไขให้ทำต่อ

```python
password = ""

while password != "python":
    password = input("รหัสผ่าน: ")

print("เข้าสู่ระบบสำเร็จ")
```

```mermaid
flowchart TD
  A[เริ่ม while] --> B{เงื่อนไขเป็นจริงไหม?}
  B -->|จริง| C[ทำงานใน loop]
  C --> D[อัปเดตค่าที่เกี่ยวกับเงื่อนไข]
  D --> B
  B -->|เท็จ| E[ออกจาก loop]
```

## break และ continue

`break` หยุด loop ทันที

```python
for number in range(1, 10):
    if number == 5:
        break
    print(number)
```

`continue` ข้ามรอบปัจจุบัน

```python
for number in range(1, 6):
    if number == 3:
        continue
    print(number)
```

## Loop กับ list

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(f"I like {fruit}")
```

## ข้อผิดพลาดที่พบบ่อย

- `while` ไม่มีทางจบ กลายเป็น infinite loop
- ลืมเพิ่มค่าตัวนับ
- เข้าใจ `range()` ผิดว่ารวมเลขสุดท้าย

## แบบฝึกหัด

1. แสดงเลข 1 ถึง 20
2. แสดงเฉพาะเลขคู่ 2 ถึง 50
3. รับตัวเลข 5 ตัว แล้วหาผลรวม

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

`range(1, 21)` ต้องใช้ 21 เพราะเลขสุดท้ายไม่ถูกรวม

```python
for number in range(1, 21):
    print(number)
```

### เฉลยข้อ 2

ใช้ step เป็น `2` เพื่อข้ามทีละสองเลขและได้เฉพาะเลขคู่

```python
for number in range(2, 51, 2):
    print(number)
```

### เฉลยข้อ 3

เริ่ม `total` ที่ 0 แล้วบวกค่าที่รับเข้ามาทีละรอบ

```python
total = 0
for round_number in range(1, 6):
    score = int(input(f"ตัวเลขที่ {round_number}: "))
    total += score

print(f"คะแนนรวมคือ {total}")
```

</details>

## Mini challenge

สร้างเกมทายเลข โดยให้ผู้ใช้ทายจนถูก แล้วบอกจำนวนครั้งที่ทาย

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ใช้ `while True` เพื่อให้ทายซ้ำจนกว่าจะถูก แล้ว `break` เพื่อจบเกม

```python
secret = 7
attempts = 0

while True:
    guess = int(input("ทายเลขลับ 1-10: "))
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

Loop ทำให้โปรแกรมทำงานซ้ำได้อย่างเป็นระบบ ลดการเขียนโค้ดซ้ำและเปิดทางสู่โปรเจกต์ที่ซับซ้อนขึ้น
