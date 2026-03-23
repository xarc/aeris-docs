---
title: Painel de Registradores
description: Área responsável por exibir o estado atual dos registradores do processador durante a execução do programa.
---

O **painel de registradores** exibe o estado atual dos registradores do processador RISC-V durante a execução do programa.

![Painel de registradores](../../assets/registers.png)

Esse painel apresenta todos os 32 registradores da arquitetura, além do **Program Counter (PC)**, que é exibido ao final da lista.

Cada linha do painel apresenta o nome do registrador, seu número na arquitetura e o valor atualmente armazenado.

Essas informações são atualizadas automaticamente conforme o programa é executado, permitindo acompanhar como as instruções modificam o estado interno do processador.

---

## Destaque de Alterações

Sempre que o valor de um registrador é modificado durante a execução, o simulador aplica uma cor de fundo diferente na linha correspondente.

![Painel de registradores Evidenciado](../../assets/register/evidenced.png)

Esse destaque visual facilita a identificação das mudanças causadas pelas instruções executadas, permitindo observar rapidamente quais registradores foram afetados.

O painel também realiza rolagem automática até o registrador modificado, garantindo que a alteração seja visível mesmo quando ela ocorre fora da área atualmente exibida.