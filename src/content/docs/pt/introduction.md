---
title: Introdução
---

# ÆRIS - Advanced Educational RISC-V Simulator

**ÆRIS** é um simulador de linguagem de montagem RISC-V baseado em navegador, desenvolvido para auxiliar estudantes no aprendizado de arquitetura de computadores. Ele fornece um ambiente no qual os usuários podem escrever, montar e executar **programas em linguagem de montagem RV32I** diretamente no navegador.

O simulador permite observar como um programa RISC-V se comporta no nível das instruções, facilitando a compreensão de como registradores, memória e fluxo de controle interagem durante a execução.

## O que o ÆRIS faz

O **ÆRIS** recebe código fonte em linguagem de montagem RISC-V e o processa por meio das etapas típicas de execução de um programa:

1. **Análise** do código fonte, convertendo-o em instruções e diretivas estruturadas (`.text`, `.data`)
2. **Montagem** das instruções em código de máquina de 32 bits seguindo a especificação do processador RISC-V
3. **Execução** das instruções em um processador simulado contendo registradores, memória e uma ULA
4. **Visualização** do estado da simulação. Esse estado é representado por um objeto interno que armazena as informações atuais do programa, incluindo registradores, memória e o contador de programa (PC), e apresenta esses dados na interface para o usuário

Todo o processamento do simulador ocorre diretamente no navegador, desde a análise do código até a execução das instruções e a visualização do estado do programa.

## Objetivos Educacionais

O **ÆRIS** foi projetado para tornar conceitos fundamentais de arquitetura de computadores mais fáceis de compreender, permitindo que sejam observados em tempo real. A ferramenta permite que estudantes explorem:

- Os formatos de instrução do RISC-V (R, I, S, B, U e J)
- Como instruções modificam registradores e memória
- O papel do **contador de programa (PC)** no controle da execução
- Como pseudo-instruções são expandidas em instruções reais
- Como chamadas de sistema interagem com o ambiente de execução
- Como os segmentos `.data` e `.text` são representados na memória

Ao executar o programa passo a passo, os usuários podem acompanhar exatamente como o estado do programa evolui ao longo da execução.

## Escopo

O **ÆRIS** é um simulador educacional focado no aprendizado da arquitetura RISC-V e da programação em linguagem de montagem. O simulador é baseado exclusivamente no **conjunto de instruções RV32I**, responsável por operações com inteiros de 32 bits.

O simulador oferece recursos voltados ao aprendizado, incluindo execução passo a passo ou contínua do programa, visualização do estado do processador durante a execução, e suporte à importação e exportação de código em linguagem de montagem, bem como à geração de arquivos em formatos binário e hexadecimal. Também há suporte a pseudo-instruções e a chamadas de sistema (`ecall`), que permitem interação com o ambiente de execução do simulador.

Para manter o simulador simples e focado em fins educacionais, algumas funcionalidades comuns em ferramentas de desenvolvimento mais completas não são implementadas. Entre elas:

- breakpoints
- simulação de pipelines ou caches
- integração com hardware físico
- análise de desempenho ou identificação de gargalos

