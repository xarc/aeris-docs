---
description: Instruções suportadas pelo simulador ÆRIS.
title: Referência de Instruções
---

O **ÆRIS** implementa o conjunto RV32I base inteiro

Esta página descreve as instruções reais suportadas pelo simulador, organizadas por formato de instrução

Todas as instruções operam sobre:
-   registradores de 32 bits
-   memória endereçável por byte


# Instruções R-Type

As instruções do tipo R realizam operações entre registradores.

| Instrução | Descrição |
|-----------|-----------|
| `add rd, rs1, rs2` | Soma dois registradores e armazena o resultado em `rd`. |
| `sub rd, rs1, rs2` | Subtrai `rs2` de `rs1`. |
| `and rd, rs1, rs2` | AND bit a bit entre registradores. |
| `or rd, rs1, rs2` | OR bit a bit entre registradores. |
| `xor rd, rs1, rs2` | XOR bit a bit entre registradores. |
| `slt rd, rs1, rs2` | Define `rd = 1` se `rs1 < rs2` (com sinal). |
| `sltu rd, rs1, rs2` | Define `rd = 1` se `rs1 < rs2` (sem sinal). |
| `sll rd, rs1, rs2` | Shift lógico à esquerda. |
| `srl rd, rs1, rs2` | Shift lógico à direita. |
| `sra rd, rs1, rs2` | Shift aritmético à direita. |


# Instruções I-Type

Instruções do tipo I utilizam imediatos ou acessam memória.

## Aritméticas com imediato

| Instrução | Descrição |
|-----------|-----------|
| `addi rd, rs1, imm` | Soma imediato de 12 bits ao registrador. |
| `andi rd, rs1, imm` | AND bit a bit com imediato. |
| `ori rd, rs1, imm` | OR bit a bit com imediato. |
| `xori rd, rs1, imm` | XOR bit a bit com imediato. |
| `slti rd, rs1, imm` | Define `rd = 1` se `rs1 < imm` (com sinal). |
| `sltiu rd, rs1, imm` | Define `rd = 1` se `rs1 < imm` (sem sinal). |

## Shift com imediato

| Instrução | Descrição |
|-----------|-----------|
| `slli rd, rs1, shamt` | Shift lógico à esquerda com imediato. |
| `srli rd, rs1, shamt` | Shift lógico à direita com imediato. |
| `srai rd, rs1, shamt` | Shift aritmético à direita com imediato. |

## Loads

| Instrução | Descrição |
|-----------|-----------|
| `lw rd, offset(rs1)` | Carrega palavra de 32 bits da memória. |
| `lh rd, offset(rs1)` | Carrega halfword (16 bits) com sinal. |
| `lhu rd, offset(rs1)` | Carrega halfword sem sinal. |
| `lb rd, offset(rs1)` | Carrega byte com sinal. |
| `lbu rd, offset(rs1)` | Carrega byte sem sinal. |

# Instruções S-Type

Instruções do tipo S armazenam valores na memória.

| Instrução | Descrição |
|-----------|-----------|
| `sw rs2, offset(rs1)` | Armazena palavra de 32 bits na memória. |
| `sh rs2, offset(rs1)` | Armazena halfword (16 bits). |
| `sb rs2, offset(rs1)` | Armazena byte (8 bits). |


# Instruções B-Type

Instruções do tipo B realizam desvios condicionais.

| Instrução | Descrição |
|-----------|-----------|
| `beq rs1, rs2, label` | Desvia se os registradores são iguais. |
| `bne rs1, rs2, label` | Desvia se os registradores são diferentes. |
| `blt rs1, rs2, label` | Desvia se `rs1 < rs2` (com sinal). |
| `bge rs1, rs2, label` | Desvia se `rs1 >= rs2` (com sinal). |
| `bltu rs1, rs2, label` | Desvia se `rs1 < rs2` (sem sinal). |
| `bgeu rs1, rs2, label` | Desvia se `rs1 >= rs2` (sem sinal). |


# Instruções U-Type

Carregam imediatos grandes.

| Instrução | Descrição |
|-----------|-----------|
| `lui rd, imm` | Carrega imediato de 20 bits nos bits superiores do registrador. |
| `auipc rd, imm` | Soma imediato de 20 bits ao valor atual do PC. |


# Instruções J-Type

Realizam saltos incondicionais.

| Instrução | Descrição |
|-----------|-----------|
| `jal rd, label` | Salta para o endereço especificado e salva o endereço de retorno em `rd`. |


# Jump I-Type

| Instrução | Descrição |
|-----------|-----------|
| `jalr rd, rs1, imm` | Salta para o endereço `rs1 + imm` e salva o endereço de retorno em `rd`. |


# Instrução de Sistema

| Instrução | Descrição |
|-----------|-----------|
| `ecall` | Executa uma chamada de sistema. |

 