---
title: Pseudo Instructions
description: Pseudo-instructions supported by the ÆRIS simulator.
---

Pseudo-instructions are syntactic shortcuts that make writing and reading Assembly programs easier. They are not part of the RISC-V hardware.

During the assembly process, each pseudo-instruction is automatically expanded into one or more real instructions from the **RV32I** set.

In the **ÆRIS** simulator, this expansion occurs during the code analysis phase, through the `PseudoExpander` component. After expansion, only real instructions remain in the program before machine code generation.

# Movement Pseudo Instructions

| Pseudo       | Description                                  |
| ------------ | -------------------------------------------- |
| `mv rd, rs`  | Copies the value from one register to another |
| `nop`        | Performs no operation                        |
| `not rd, rs` | Inverts all bits of a register               |

---

# Immediate Pseudo Instructions

| Pseudo       | Description                                 |
| ------------ | ------------------------------------------- |
| `li rd, imm` | Loads an immediate value into the register  |

---

# Address Pseudo Instructions

| Pseudo         | Description                       |
| -------------- | --------------------------------- |
| `la rd, label` | Loads the address of a label      |

---

# Jump Pseudo Instructions

| Pseudo             | Description                                      |
| ------------------ | ------------------------------------------------ |
| `j label`          | Unconditional jump                               |
| `jal label`        | Jumps and saves return address in `ra`           |
| `jalr rs`          | Jumps to address in register                     |
| `jalr rs, imm`     | Jumps to address `rs + imm`                      |
| `jalr rd, imm(rs)` | Jumps to `rs + imm` saving return in `rd`        |
| `jr rs`            | Jumps to address stored in `rs`                  |
| `jr rs, imm`       | Jumps to address `rs + imm`                      |

---

# Branch Pseudo Instructions

| Pseudo                 | Description              |
| ---------------------- | ------------------------ |
| `beqz rs, label`       | Branch if `rs == 0`      |
| `bnez rs, label`       | Branch if `rs != 0`      |
| `bgez rs, label`       | Branch if `rs >= 0`      |
| `bltz rs, label`       | Branch if `rs < 0`       |
| `bgtz rs, label`       | Branch if `rs > 0`       |
| `blez rs, label`       | Branch if `rs <= 0`      |
| `bgt rs1, rs2, label`  | Branch if `rs1 > rs2`    |
| `bgtu rs1, rs2, label` | Branch (unsigned)        |
| `ble rs1, rs2, label`  | Branch if `rs1 <= rs2`   |
| `bleu rs1, rs2, label` | Branch (unsigned)        |

---

# Load Pseudo Instructions

| Pseudo             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `lb rd, (rs)`      | Loads byte from memory                         |
| `lb rd, imm`       | Loads byte using offset                        |
| `lb rd, largeImm`  | Loads byte with large immediate                |
| `lb rd, label`     | Loads byte from a label                        |
| `lbu rd, (rs)`     | Loads unsigned byte                            |
| `lbu rd, imm`      | Loads unsigned byte with offset                |
| `lbu rd, largeImm` | Loads unsigned byte with large offset          |
| `lbu rd, label`    | Loads unsigned byte from label                 |
| `lh rd, (rs)`      | Loads halfword                                |
| `lh rd, imm`       | Loads halfword with offset                     |
| `lh rd, largeImm`  | Loads halfword with large offset               |
| `lh rd, label`     | Loads halfword from label                      |
| `lhu rd, (rs)`     | Loads unsigned halfword                        |
| `lhu rd, imm`      | Loads unsigned halfword with offset            |
| `lhu rd, largeImm` | Loads unsigned halfword with large offset      |
| `lhu rd, label`    | Loads unsigned halfword from label             |
| `lw rd, (rs)`      | Loads word from memory                         |
| `lw rd, imm`       | Loads word with offset                         |
| `lw rd, largeImm`  | Loads word with large offset                   |
| `lw rd, label`     | Loads word from label                          |

---

# Store Pseudo Instructions

| Pseudo             | Description                    |
| ------------------ | ------------------------------ |
| `sb rs, (rd)`      | Stores byte in memory          |
| `sb rs, imm`       | Stores byte with offset        |
| `sb rs, label, rt` | Stores byte at label           |
| `sh rs, (rd)`      | Stores halfword                |
| `sh rs, imm`       | Stores halfword with offset    |
| `sh rs, label, rt` | Stores halfword at label       |
| `sw rs, (rd)`      | Stores word                    |
| `sw rs, imm`       | Stores word with offset        |
| `sw rs, label, rt` | Stores word at label           |

---

# Set Pseudo Instructions

| Pseudo              | Description                          |
| ------------------- | ------------------------------------ |
| `seqz rd, rs`       | `rd = 1` if `rs == 0`                |
| `snez rd, rs`       | `rd = 1` if `rs != 0`                |
| `sltz rd, rs`       | `rd = 1` if `rs < 0`                 |
| `sgtz rd, rs`       | `rd = 1` if `rs > 0`                 |
| `sgt rd, rs1, rs2`  | `rd = 1` if `rs1 > rs2`              |
| `sgtu rd, rs1, rs2` | `rd = 1` if `rs1 > rs2` (unsigned)   |
