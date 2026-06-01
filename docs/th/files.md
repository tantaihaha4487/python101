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

## Mini challenge

สร้าง todo app แบบ text file: เพิ่มงาน แสดงงานทั้งหมด และบันทึกลง `todo.txt`

## สรุป

การอ่านเขียนไฟล์ทำให้โปรแกรมจำข้อมูลได้หลังปิดโปรแกรม เป็นพื้นฐานของ app ที่ใช้งานจริง
