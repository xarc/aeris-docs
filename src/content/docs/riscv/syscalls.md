---
title: Syscalls
description: System calls (ecall) supported by the ÆRIS simulator.
---

In RISC-V, **syscalls** allow a program to request services from the execution environment.

This is done using the `ecall` instruction.

In the **ÆRIS** simulator, syscalls are mainly used for console input and output.

Unlike a real operating system, **ÆRIS** **does not have a kernel mode**, so `ecall` is handled directly by the simulator.

---

# How `ecall` Works

A syscall follows three steps:

1. Set the **syscall code** in register `a7`
2. Pass the **arguments** in registers (`a0`, `a1`, ...)
3. Execute the `ecall` instruction

Example:

```asm
li a7, 1
li a0, 42
ecall
```

This prints the number `42`.

---

# Available Syscalls

| Code | Name | Description |
|------|------|------|
| 1 | PrintInt | Prints the integer in `a0` |
| 2 | PrintString | Prints a string from the address in `a0` |
| 3 | ReadInt | Reads an integer from the console |
| 4 | ReadString | Reads a string from the console |

---

# PrintInt (1)

Prints the integer value stored in `a0`.

Example:

```asm
li a7, 1
li a0, 123
ecall
```

Output:

```
123
```

---

# PrintString (2)

Prints a sequence of characters from the address in `a0`.

In **ÆRIS**, strings **do not have an automatic null terminator**.

Example:

```asm
.data
msg: .ascii "Hello"

.text
main:
    li a7, 2
    la a0, msg
    ecall
```

---

# ReadInt (3)

Reads an integer from the user.

Example:

```asm
li a7, 3
ecall
```

Behavior:

1. The simulator pauses execution
2. The user enters a number
3. The value is stored in `a0`

---

# ReadString (4)

Reads a sequence of characters from the user and stores it in memory.

Arguments:

| Register | Description |
|------|------|
| `a0` | Buffer address |
| `a1` | Maximum size |

Example:

```asm
.data
buffer: .word 0,0,0,0,0,0,0,0

.text
main:
    li a7, 4
    la a0, buffer
    li a1, 32
    ecall
```

Behavior:

- The user types a string
- The characters are written in memory starting at `a0`
- At most `a1` bytes are stored
