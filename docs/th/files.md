# การทำงานกับไฟล์

โปรแกรมจำนวนมากต้องอ่านหรือบันทึกข้อมูล เช่น note, log, รายชื่อผู้ใช้ หรือผลลัพธ์จากการคำนวณ

## เขียนไฟล์

```python
with open("note.txt", "w", encoding="utf-8") as file:
    file.write("สวัสดี Python\n")
    file.write("นี่คือไฟล์แรกของฉัน")
```

โหมด `w` คือเขียนใหม่ ถ้าไฟล์มีอยู่เดิมจะถูกแทนที่

หลังรันแล้วจะมีไฟล์ `note.txt` ที่มีข้อความ 2 บรรทัด

## อ่านไฟล์

```python
with open("note.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

ผลลัพธ์:

```text
สวัสดี Python
นี่คือไฟล์แรกของฉัน
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

1. รับชื่อผู้ใช้จาก `input()` แล้วเขียนลงไฟล์ `user.txt` โดยใช้ `encoding="utf-8"`
2. เปิดไฟล์ `user.txt` อ่านทุกบรรทัดด้วย `readlines()` แล้วแสดงจำนวนบรรทัดด้วย `len()`
3. รับ note ใหม่จากผู้ใช้ แล้วเพิ่มต่อท้ายไฟล์ `notes.txt` โดยไม่ลบ note เดิม

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

สร้าง todo app แบบ text file ที่รับคำสั่ง `add`, `list`, และ `quit`: `add` ให้เพิ่มงานใหม่ลง `todo.txt`, `list` ให้แสดงงานทั้งหมด, `quit` ให้จบโปรแกรม และถ้ายังไม่มี `todo.txt` ต้องแสดงว่า `ยังไม่มีงาน` โดยไม่ crash

<details class="answer-reveal">
<summary>ดูเฉลย Mini challenge</summary>

ตัวอย่างนี้ครอบคลุมคำสั่ง `add`, `list`, `quit`, คำสั่งที่ไม่รู้จัก และกรณีเปิดโปรแกรมครั้งแรกที่ยังไม่มี `todo.txt`

```python
while True:
    command = input("พิมพ์ add/list/quit: ")

    if command == "add":
        task = input("งานใหม่: ")
        with open("todo.txt", "a", encoding="utf-8") as file:
            file.write(task + "\n")
        print("บันทึกงานแล้ว")
    elif command == "list":
        try:
            with open("todo.txt", "r", encoding="utf-8") as file:
                lines = file.readlines()
        except FileNotFoundError:
            lines = []

        if len(lines) == 0:
            print("ยังไม่มีงาน")
        else:
            for line in lines:
                print("- " + line.strip())
    elif command == "quit":
        break
    else:
        print("คำสั่งไม่ถูกต้อง")
```

ตัวอย่างการรัน:

```text
พิมพ์ add/list/quit: list
ยังไม่มีงาน
พิมพ์ add/list/quit: add
งานใหม่: อ่านบท Functions
บันทึกงานแล้ว
พิมพ์ add/list/quit: list
- อ่านบท Functions
```

</details>

## สรุป

การอ่านเขียนไฟล์ทำให้โปรแกรมจำข้อมูลได้หลังปิดโปรแกรม เป็นพื้นฐานของ app ที่ใช้งานจริง
