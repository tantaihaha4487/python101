# โปรเจกต์สำหรับผู้เริ่มต้น

โปรเจกต์ช่วยเปลี่ยนความรู้เป็นทักษะจริง เลือกทำทีละโปรเจกต์และพยายามปรับแต่งเพิ่มเอง

## 1. เกมทายเลข

เป้าหมาย: ให้คอมพิวเตอร์สุ่มเลข แล้วผู้ใช้ทายจนถูก

แนวคิดที่ใช้: `random`, loop, condition, input, error handling

```python
import random

secret = random.randint(1, 100)
attempts = 0

while True:
    try:
        guess = int(input("ทายเลข 1-100: "))
    except ValueError:
        print("กรุณากรอกตัวเลข")
        continue

    attempts += 1

    if guess < secret:
        print("น้อยไป")
    elif guess > secret:
        print("มากไป")
    else:
        print(f"ถูกต้อง ใช้ {attempts} ครั้ง")
        break
```

เพิ่มความท้าทาย: จำกัดจำนวนครั้ง เพิ่มระดับความยาก หรือเก็บคะแนนสูงสุดในไฟล์

## 2. Calculator

เป้าหมาย: รับเลขสองตัวและเครื่องหมาย แล้วคำนวณผลลัพธ์

```python
def calculate(a, operator, b):
    if operator == "+":
        return a + b
    if operator == "-":
        return a - b
    if operator == "*":
        return a * b
    if operator == "/":
        if b == 0:
            return "หารด้วยศูนย์ไม่ได้"
        return a / b
    return "ไม่รู้จักเครื่องหมายนี้"

first = float(input("เลขตัวแรก: "))
operator = input("เครื่องหมาย (+ - * /): ")
second = float(input("เลขตัวที่สอง: "))

print(calculate(first, operator, second))
```

## 3. To-do list

เป้าหมาย: เพิ่มและแสดงรายการงาน

แนวคิดที่ใช้: list, loop, function, file

ขั้นต่อไป: บันทึกงานลง `todo.txt` และโหลดกลับมาตอนเปิดโปรแกรม

## 4. Password generator

เป้าหมาย: สุ่มรหัสผ่านตามความยาวที่ผู้ใช้กำหนด

แนวคิดที่ใช้: `random`, string, loop

## 5. Rock paper scissors

เป้าหมาย: เล่นเป่ายิ้งฉุบกับคอมพิวเตอร์

แนวคิดที่ใช้: condition, random choice, score counter

## 6. Contact book

เป้าหมาย: เพิ่ม ค้นหา และลบเบอร์ติดต่อ

แนวคิดที่ใช้: dictionary, loop, file

## 7. Quiz app

เป้าหมาย: ถามคำถามหลายข้อ ตรวจคำตอบ และสรุปคะแนน

แนวคิดที่ใช้: list of dictionaries, loop, condition

## วิธีทำโปรเจกต์ให้ได้ผล

1. ทำ version เล็กที่สุดก่อน
2. ทดสอบทุกครั้งที่เพิ่ม feature
3. ถ้า error ให้อ่านบรรทัดที่ error ก่อน
4. เขียนสิ่งที่อยากเพิ่มไว้ แล้วทำทีละข้อ

## สรุป

หลังทำโปรเจกต์เหล่านี้ คุณจะได้ฝึกพื้นฐานเกือบครบ: input, condition, loop, function, data structure, file และ error handling
