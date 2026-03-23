---
title: Diretivas
description: Diretivas do assembler suportadas pelo simulador ÆRIS.
---

Diretivas do assembler são comandos especiais que controlam como o assembler organiza os dados na memória.

Diferente das instruções normais, diretivas não geram código de máquina. Em vez disso, elas informam ao assembler como alocar e inicializar dados antes da execução do programa.

No simulador **ÆRIS**, diretivas são normalmente utilizadas dentro da seção **`.data`**.

Atualmente, três diretivas de dados são suportadas:

- `.word`
- `.ascii`
- `.string`

---

# `.word`

A diretiva `.word` armazena **valores inteiros de 32 bits** na memória.

Cada valor ocupa **4 bytes** e é armazenado sequencialmente no segmento de dados.

Exemplo:

```asm
.data
value: .word 10
```

Isso armazena o valor `10` como um inteiro de 32 bits.

Também é possível definir múltiplos valores em uma única diretiva:

```asm
.data
numbers: .word 1, 2, 3, 4
```

Isso cria quatro palavras consecutivas de 32 bits na memória

---

# `.ascii`

A diretiva `.ascii` armazena uma sequência de caracteres na memória

Exemplo:

```asm
.data
msg: .ascii "Hello"
```

Isso armazena os bytes ASCII correspondentes aos caracteres:

```
H e l l o
```

Como não existe byte terminador, `.ascii` é geralmente usado para armazenar **dados de caracteres brutos**

---

# `.string`

A diretiva `.string` armazena uma sequência de caracteres na memória.

No simulador **ÆRIS**, `.string` é apenas um **alias** para `.ascii`.  
Isso significa que ambas as diretivas possuem exatamente o mesmo comportamento.

Exemplo:

```asm
.data
msg: .string "Hello"
```

 