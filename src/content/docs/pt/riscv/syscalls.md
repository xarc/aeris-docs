---
title: Syscalls
description: System calls (ecall) supported by the ÆRIS simulator.
---

Em RISC-V, **syscalls** permitem que um programa solicite serviços ao ambiente de execução.

Isso é feito utilizando a instrução `ecall`.

No simulador **ÆRIS**, syscalls são utilizados principalmente para entrada e saída no console.

Diferente de um sistema operacional real, o **ÆRIS** **não possui modo kernel**, então o `ecall` é tratado diretamente pelo simulador.

---

# Como o `ecall` Funciona

Uma syscall segue três passos:

1. Definir o **código da syscall** no registrador `a7`
2. Passar os **argumentos** nos registradores (`a0`, `a1`, ...)
3. Executar a instrução `ecall`

Exemplo:

```asm
li a7, 1
li a0, 42
ecall
```

Isso imprime o número `42`.

---

# Syscalls Disponíveis

| Código | Nome | Descrição |
|------|------|------|
| 1 | PrintInt | Imprime o inteiro em `a0` |
| 4 | PrintString | Imprime string a partir do endereço em `a0` |
| 5 | ReadInt | Lê um inteiro do console |
| 8 | ReadString | Lê uma string do console |
| 10 | Exit | Para a execução e imprime `-- program is finished --` |

---

# PrintInt (1)

Imprime o valor inteiro armazenado em `a0`.

Exemplo:

```asm
li a7, 1
li a0, 123
ecall
```

Saída:

```
123
```

---

# PrintString (4)

Imprime uma sequência de caracteres a partir do endereço em `a0`.

No **ÆRIS**, strings **não possuem terminador nulo automático**.

Exemplo:

```asm
.data
msg: .ascii "Hello"

.text
main:
    li a7, 4
    la a0, msg
    ecall
```

---

# ReadInt (5)

Lê um número inteiro do usuário.

Exemplo:

```asm
li a7, 5
ecall
```

Comportamento:

1. O simulador pausa a execução
2. O usuário insere um número
3. O valor é armazenado em `a0`

---

# ReadString (8)

Lê uma sequência de caracteres do usuário e armazena na memória.

Argumentos:

| Registrador | Descrição |
|------|------|
| `a0` | Endereço do buffer |
| `a1` | Tamanho máximo |

Exemplo:

```asm
.data
buffer: .word 0,0,0,0,0,0,0,0

.text
main:
    li a7, 8
    la a0, buffer
    li a1, 32
    ecall
```

Comportamento:

- O usuário digita uma string
- Os caracteres são escritos na memória a partir de `a0`
- No máximo `a1` bytes são armazenados

---

# Exit (10)

Para a execução do programa e imprime `-- program is finished --` no console.

Exemplo:

```asm
li a7, 10
ecall
```

Comportamento:

- O simulador interrompe a execução imediatamente
- A mensagem `-- program is finished --` é exibida no console

