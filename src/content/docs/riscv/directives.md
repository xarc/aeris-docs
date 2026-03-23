---
title: Directives
description: Assembler directives supported by the ÆRIS simulator.
---

Assembler directives are special commands that control how the assembler organizes data in memory.

Unlike normal instructions, directives do not generate machine code. Instead, they inform the assembler how to allocate and initialize data before program execution.

In the **ÆRIS** simulator, directives are typically used within the **`.data`** section.

Currently, three data directives are supported:

- `.word`
- `.ascii`
- `.string`

---

# `.word`

The `.word` directive stores **32-bit integer values** in memory.

Each value occupies **4 bytes** and is stored sequentially in the data segment.

Example:

```asm
.data
value: .word 10
```

This stores the value `10` as a 32-bit integer.

It is also possible to define multiple values in a single directive:

```asm
.data
numbers: .word 1, 2, 3, 4
```

This creates four consecutive 32-bit words in memory

---

# `.ascii`

The `.ascii` directive stores a sequence of characters in memory

Example:

```asm
.data
msg: .ascii "Hello"
```

This stores the ASCII bytes corresponding to the characters:

```
H e l l o
```

Since there is no null terminator, `.ascii` is generally used to store **raw character data**

---

# `.string`

The `.string` directive stores a sequence of characters in memory.

In the **ÆRIS** simulator, `.string` is just an **alias** for `.ascii`.  
This means both directives have exactly the same behavior.

Example:

```asm
.data
msg: .string "Hello"
```
