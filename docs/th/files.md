# การทำงานกับไฟล์

โปรแกรมจำนวนมากต้องอ่านหรือบันทึกข้อมูล เช่น note, log, รายชื่อผู้ใช้ หรือผลลัพธ์จากการคำนวณ

## เขียนไฟล์

```python
with open("note.txt", "w", encoding="utf-8") as file:
    file.write("สวัสดี Python\n")
    file.write("นี่คือไฟล์แรกของฉัน")
```

โหมด `w` คือเขียนใหม่ ถ้าไฟล์มีอยู่เดิมจะถูกแทนที่

## อ่านไฟล์

```python
with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

## เพิ่มข้อมูลต่อท้าย

```python
with open("note.txt", "a", encoding="utf-8") as file:
    file.write("\nบรรทัดใหม่")
```

## อ่านทีละบรรทัด

```python
with open("note.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

## ทำไมต้องใช้ with

`with` ช่วยปิดไฟล์ให้อัตโนมัติ แม้เกิด error ระหว่างทำงาน

## ข้อผิดพลาดที่พบบ่อย

- อ่านไฟล์ที่ไม่มีอยู่ ทำให้เกิด `FileNotFoundError`
- ลืม `encoding="utf-8"` เมื่อใช้ภาษาไทย
- ใช้โหมด `w` แล้วข้อมูลเดิมหาย

## แบบฝึกหัด

1. สร้างโปรแกรมบันทึกชื่อผู้ใช้ลงไฟล์
2. อ่านไฟล์แล้วนับจำนวนบรรทัด
3. สร้าง note app ที่เพิ่ม note ใหม่ต่อท้ายไฟล์

<details class="answer-reveal">
<summary>ดูเฉลยแบบฝึกหัด</summary>

### เฉลยข้อ 1

ใช้โหมด `w` เพื่อสร้างหรือเขียนทับไฟล์สำหรับเก็บชื่อผู้ใช้

```python
name = input("ชื่อผู้ใช้: ")
with open("user.txt", "w", encoding="utf-8") as file:
    file.write(name + "\n")
```

### เฉลยข้อ 2

อ่านไฟล์ด้วย `readlines()` แล้วใช้ `len()` เพื่อนับจำนวนบรรทัด

```python
with open("user.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
print(f"ไฟล์มี {len(lines)} บรรทัด")
```

### เฉลยข้อ 3

ใช้โหมด `a` เพื่อเพิ่ม note ใหม่ต่อท้ายไฟล์โดยไม่ลบของเดิม

```python
note = input("note ใหม่: ")
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write(note + "\n")
```

</details>

## Mini challenge

สร้าง todo app แบบ text file: เพิ่มงาน แสดงงานทั้งหมด และบันทึกลง `todo.txt`

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ตัวอย่างนี้ครอบคลุมคำสั่ง `add`, `list`, `quit` และคำสั่งที่ไม่รู้จัก

```python
tasks = []

while True:
    command = input("พิมพ์ add/list/quit: ")

    if command == "add":
        task = input("งานใหม่: ")
        tasks.append(task)
        with open("todo.txt", "a", encoding="utf-8") as file:
            file.write(task + "\n")
    elif command == "list":
        with open("todo.txt", "r", encoding="utf-8") as file:
            for line in file:
                print("- " + line.strip())
    elif command == "quit":
        break
    else:
        print("คำสั่งไม่ถูกต้อง")
```

</details>

## สรุป

การอ่านเขียนไฟล์ทำให้โปรแกรมจำข้อมูลได้หลังปิดโปรแกรม เป็นพื้นฐานของ app ที่ใช้งานจริง
