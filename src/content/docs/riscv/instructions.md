---
description: Instructions supported by the ÆRIS simulator.
title: Instruction Reference
---

**ÆRIS** implements the base integer RV32I set

This page describes the actual instructions supported by the simulator, organized by instruction format

All instructions operate on:
-   32-bit registers
-   byte-addressable memory


# R-Type Instructions

R-type instructions perform operations between registers.

| Instruction | Description |
|-----------|-----------|
| `add rd, rs1, rs2` | Adds two registers and stores the result in `rd`. |
| `sub rd, rs1, rs2` | Subtracts `rs2` from `rs1`. |
| `and rd, rs1, rs2` | Bitwise AND between registers. |
| `or rd, rs1, rs2` | Bitwise OR between registers. |
| `xor rd, rs1, rs2` | Bitwise XOR between registers. |
| `slt rd, rs1, rs2` | Sets `rd = 1` if `rs1 < rs2` (signed). |
| `sltu rd, rs1, rs2` | Sets `rd = 1` if `rs1 < rs2` (unsigned). |
| `sll rd, rs1, rs2` | Logical left shift. |
| `srl rd, rs1, rs2` | Logical right shift. |
| `sra rd, rs1, rs2` | Arithmetic right shift. |


# I-Type Instructions

I-type instructions use immediates or access memory.

## Arithmetic with immediate

| Instruction | Description |
|-----------|-----------|
| `addi rd, rs1, imm` | Adds a 12-bit immediate to the register. |
| `andi rd, rs1, imm` | Bitwise AND with immediate. |
| `ori rd, rs1, imm` | Bitwise OR with immediate. |
| `xori rd, rs1, imm` | Bitwise XOR with immediate. |
| `slti rd, rs1, imm` | Sets `rd = 1` if `rs1 < imm` (signed). |
| `sltiu rd, rs1, imm` | Sets `rd = 1` if `rs1 < imm` (unsigned). |

## Shift with immediate

| Instruction | Description |
|-----------|-----------|
| `slli rd, rs1, shamt` | Logical left shift with immediate. |
| `srli rd, rs1, shamt` | Logical right shift with immediate. |
| `srai rd, rs1, shamt` | Arithmetic right shift with immediate. |

## Loads

| Instruction | Description |
|-----------|-----------|
| `lw rd, offset(rs1)` | Loads a 32-bit word from memory. |
| `lh rd, offset(rs1)` | Loads a halfword (16 bits) with sign. |
| `lhu rd, offset(rs1)` | Loads a halfword without sign. |
| `lb rd, offset(rs1)` | Loads a byte with sign. |
| `lbu rd, offset(rs1)` | Loads a byte without sign. |

# S-Type Instructions

S-type instructions store values in memory.

| Instruction | Description |
|-----------|-----------|
| `sw rs2, offset(rs1)` | Stores a 32-bit word in memory. |
| `sh rs2, offset(rs1)` | Stores a halfword (16 bits). |
| `sb rs2, offset(rs1)` | Stores a byte (8 bits). |


# B-Type Instructions

B-type instructions perform conditional branches.

| Instruction | Description |
|-----------|-----------|
| `beq rs1, rs2, label` | Branches if the registers are equal. |
| `bne rs1, rs2, label` | Branches if the registers are different. |
| `blt rs1, rs2, label` | Branches if `rs1 < rs2` (signed). |
| `bge rs1, rs2, label` | Branches if `rs1 >= rs2` (signed). |
| `bltu rs1, rs2, label` | Branches if `rs1 < rs2` (unsigned). |
| `bgeu rs1, rs2, label` | Branches if `rs1 >= rs2` (unsigned). |


# U-Type Instructions

Load large immediates.

| Instruction | Description |
|-----------|-----------|
| `lui rd, imm` | Loads a 20-bit immediate into the upper bits of the register. |
| `auipc rd, imm` | Adds a 20-bit immediate to the current PC value. |


# J-Type Instructions

Perform unconditional jumps.

| Instruction | Description |
|-----------|-----------|
| `jal rd, label` | Jumps to the specified address and stores the return address in `rd`. |


# Jump I-Type

| Instruction | Description |
|-----------|-----------|
| `jalr rd, rs1, imm` | Jumps to the address `rs1 + imm` and stores the return address in `rd`. |


# System Instruction

| Instruction | Description |
|-----------|-----------|
| `ecall` | Executes a system call. |
