---
title: Painel de Execução
description: Área responsável por exibir o código montado e o estado atual da memória durante a execução do programa.
---

O **painel de execução** é responsável por exibir o resultado do processo de montagem do programa e o estado atual da memória durante a execução.

![Painel de execução](../../assets/runtime.png)

Esse painel é dividido em duas áreas principais:

- **Text Segment**
- **Data Segment**

Cada uma dessas áreas apresenta informações diferentes sobre o estado do programa durante a simulação.

---

## Text Segment

O **text segment** apresenta as instruções do programa após o processo de montagem.

Para cada instrução, o simulador apresenta seu endereço na memória, o código de máquina em formato hexadecimal e a instrução correspondente em assembly. Quando o usuário utiliza pseudo-instruções, o simulador também mostra as instruções reais geradas durante o processo de montagem.

Exemplo:

    0x00400000    0x0FC10517    auipc x10 64528    la a0 prompt
    0x00400004    0x00050513    addi x10 x10 0

Nesse exemplo, a pseudo-instrução:

    la a0 prompt

é convertida pelo assembler em **duas instruções reais**:

    auipc
    addi

Esse comportamento ocorre porque algumas pseudo-instruções da linguagem assembly representam sequências de instruções reais da arquitetura.

### Instrução Atual

Durante a execução do programa, o simulador destaca com **uma cor diferente** a instrução que será executada a seguir.

Esse destaque acompanha o valor do **Program Counter (PC)** e permite visualizar facilmente o fluxo de execução do programa.

Caso ocorra uma instrução de salto (*jump* ou *branch*), o destaque é movido diretamente para a instrução de destino, indicando a nova posição do fluxo de execução.

![Instrução atual destacada](../../assets/execution/current-instruction.png)
---

## Data Segment

O **data segment** exibe o conteúdo da memória do simulador.

Como a memória do sistema é muito grande, o painel fornece ferramentas para facilitar a navegação entre diferentes regiões.

### Seleção de Regiões da Memória

No topo do painel existe um **seletor de regiões de memória**, que permite navegar diretamente para partes importantes da memória do programa.

As regiões disponíveis são:

- `.data` - `0x10010000`
- `heap` - `0x10040000`
- `gp` - `0x10008000`
- `sp` - `0x7fffeffc`
- `.text` - `0x00400000`

Cada opção move automaticamente a visualização da memória para o **endereço inicial da região selecionada**.

Essa navegação permite acessar rapidamente as áreas mais relevantes da memória sem precisar percorrer manualmente todo o espaço de endereçamento.
 
![Seletor de regiões da memória](../../assets/execution/memory-selector.png)

---

## Visualização da Memória

Ao lado do seletor de memória existem **três opções de visualização** que controlam como os dados são exibidos:

- **Hex Address** - Exibe os endereços da memória em formato hexadecimal

- **Hex Value** - Exibe os valores armazenados na memória em formato hexadecimal

- **ASCII** - Exibe os valores da memória interpretados como caracteres ASCII

Quando a visualização **ASCII** está ativada, ela substitui a visualização hexadecimal dos valores, mostrando o conteúdo da memória como caracteres.

Cada palavra de memória é convertida para ASCII interpretando seus bytes individualmente.

![Opções de visualização da memória](../../assets/execution/memory-view-options.png)

---

## Paginação da Memória

A memória é exibida em **páginas**, sendo que cada página apresenta:

- **128 endereços de memória**

Isso permite navegar pela memória de forma organizada e evita a exibição de uma quantidade excessiva de dados de uma só vez.

![Opções de paginação da memória](../../assets/execution/memory-pagination.png)

---

## Ajuste do Espaço do Painel

Entre o **text segment** e o **data segment** existe uma **barra de redimensionamento**.

Essa barra pode ser arrastada verticalmente para ajustar o espaço visível entre o *text segment* e o *data segment*.

Esse recurso permite ajustar a visualização conforme a necessidade do usuário, facilitando tanto a análise das instruções quanto a inspeção do conteúdo da memória.

![Barra de redimensionamento](../../assets/execution/resizing.png)
