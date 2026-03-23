---
title: RISC-V Overview  
description: Basic concepts of the RISC-V architecture relevant to the simulator.  
---

RISC-V is an open Instruction Set Architecture (ISA) based on the principles of Reduced Instruction Set Computing (RISC)

It defines how software communicates with the processor through:

- machine instructions  
- registers  
- memory  

**ÆRIS** implements the **RV32I** set, which is the base integer set of the RISC-V architecture and represents the most common starting point for learning the architecture

---

# RV32I

The simulator implements **RV32I**, the base integer set of the RISC-V architecture

| Property | Value |
|-------------|------|
| Word size | 32 bits |
| Register width | 32 bits |
| Number of registers | 32 |
| Instruction size | 32 bits |
| Instruction set | Base integer |

The RV32I set includes instructions for:

- arithmetic operations  
- memory access  
- conditional branches  
- jumps  
- system calls  

---

# Registers

RISC-V defines **32 general-purpose registers**:

    x0 - x31

Each register stores a **32-bit** value

## ABI Convention

In addition to the numeric name, many registers have **ABI names**, which indicate their conventional use

![RISC-V Registers](../assets/riscv/registers.png)

| Register | ABI Name | Typical Use |
|-------------|---------|-----------|
| x0 | zero | constant zero |
| x1 | ra | return address |
| x2 | sp | stack pointer |
| x3 | gp | global pointer |
| x4 | tp | thread pointer |
| x5–x7 | t0–t2 | temporaries |
| x8–x9 | s0–s1 | saved registers |
| x10–x17 | a0–a7 | function arguments |
| x18–x27 | s2–s11 | saved registers |
| x28–x31 | t3–t6 | temporaries |

---

# Instruction Formats

All RV32I instructions are **32 bits**, but the internal organization of these bits depends on the **instruction format**

The main formats are:

| Format | Purpose |
|--------|------------|
| R-type | operations between registers |
| I-type | operations with immediate and loads |
| S-type | stores |
| B-type | conditional branches |
| U-type | upper immediate |
| J-type | jumps |

![Instruction Formats](../assets/riscv/formats.png)

Each format positions the instruction fields in different locations within the 32-bit word

Common fields include:

- opcode  
- source registers  
- destination register  
- immediate  

---

# Program Counter

The **Program Counter (PC)** stores the address of the current instruction

Normally:  
PC = PC + 4  

This happens because each instruction occupies 4 bytes.

**Branch** and **jump** instructions modify the value of the PC to change the program execution flow

---

# System Calls

The `ecall` instruction allows the program to request services from the execution environment

In **ÆRIS**, syscalls are used to interact with the console

Example:

    li a7, 1
    li a0, 42
    ecall

This code prints the integer stored in `a0`
