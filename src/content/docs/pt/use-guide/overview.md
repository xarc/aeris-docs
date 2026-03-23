---
title: Visão Geral
description: Visão geral de como utilizar o simulador ÆRIS.
---
O **ÆRIS** fornece um ambiente interativo para escrever, montar e executar programas em linguagem de montagem RISC-V diretamente no navegador. A interface do simulador foi projetada para facilitar a observação de como um programa se comporta no nível das instruções.

Este guia explica como utilizar o simulador e como cada parte da interface contribui para o fluxo de execução de um programa.

## Fluxo Básico

O uso do **ÆRIS** normalmente segue uma sequência simples:

1. **Escrever ou carregar um programa** no editor
2. **Montar o código**, que realiza a análise e o converte em instruções de máquina
3. **Executar o programa**, de forma passo a passo ou contínua
4. **Inspecionar o estado do programa** por meio dos registradores, memória e saída do console

Durante a execução, o simulador atualiza o estado do processador após cada instrução, permitindo observar como os valores se movem entre registradores e memória.

## Principais Áreas da Interface

A interface do simulador é dividida em diferentes áreas, cada uma responsável por uma parte do processo de edição, execução e análise do programa.

### Menu de Opções

O menu de opções reúne as principais ações relacionadas à edição do programa, montagem do código e controle da execução. A partir dele é possível criar ou abrir arquivos, montar o programa, iniciar ou controlar a execução e acessar opções e ajuda do simulador.

![Menu de opções](../../assets/menu.png)

---

### Editor

O editor é a área principal onde os programas em linguagem de montagem são escritos ou carregados.

![Editor](../../assets/editor.png)

Nele é possível editar o código do programa, organizar os segmentos `.text` e `.data`, e preparar o código para montagem e execução.

---

### Visualização de Registradores

Esta área exibe os valores atuais dos 32 registradores do RISC-V, além do contador de programa no final.

![Registradores](../../assets/registers.png)

Durante a execução do programa, é possível acompanhar como os valores dos registradores são modificados pelas instruções executadas.

---

### Painel de Execução

O painel de execução apresenta o código montado e o estado atual da execução do programa.

![Execução](../../assets/runtime.png)

A parte superior do painel mostra o segmento `.text`, onde são exibidas as instruções do programa já convertidas para linguagem de máquina. Durante a execução, é possível observar qual instrução está sendo executada e acompanhar o fluxo do programa.

A parte inferior permite navegar pelo conteúdo da memória do processador, mostrando os dados utilizados pelo programa durante a execução.

Entre os recursos disponíveis estão:

- navegação por páginas de memória
- cada página exibindo **128 endereços**
- visualização dos **endereços** em formato **hexadecimal** ou **decimal**
- visualização dos **valores da memória** em formato **hexadecimal**, **decimal** ou **ASCII**

Entre as duas áreas existe uma barra de redimensionamento, que pode ser arrastada para cima ou para baixo para ajustar o espaço visível de cada parte do painel e facilitar a visualização das instruções ou da memória.

### Console

O console exibe mensagens geradas pelo simulador e também as saídas produzidas pelo programa durante a execução.

![Console](../../assets/console.png)

Ele funciona como o dispositivo de entrada e saída padrão do programa dentro do simulador e é utilizado para interação por meio de chamadas de sistema (`ecall`).

Dependendo do tipo de chamada executada, o console pode exibir mensagens, imprimir valores ou solicitar dados ao usuário. Quando uma chamada de sistema que requer entrada de dados é executada, o console apresenta um campo de entrada, permitindo que o usuário digite o valor solicitado. Após inserir o valor, o programa continua sua execução normalmente.

Na parte inferior do console também são exibidas informações auxiliares, como:

- o contador de programa (PC) atual
- o número de linhas exibidas no console

No lado direito do painel existem dois botões adicionais:

- **Exportar console**  
  Permite exportar todo o conteúdo atual do console para um arquivo

- **Limpar console**  
  Remove todas as mensagens atualmente exibidas no console

Além das interações do programa, o console também apresenta mensagens relacionadas ao funcionamento do simulador, como resultados da montagem do código e outras informações importantes durante a execução.

---

## Interface Completa do Simulador

A imagem abaixo apresenta uma visão geral da interface completa do **ÆRIS** e a posição de cada uma das áreas descritas acima.

![Interface completa do ÆRIS](../../assets/interface-overview.png)

## O que você aprenderá neste guia

As páginas seguintes do **Guia de Uso** estão organizadas em abas, e cada uma delas explica uma parte específica do simulador e como utilizá-la.

Neste guia você aprenderá como:

- Navegar pela interface do simulador
- Utilizar o menu de opções para criar, abrir, montar e executar programas
- Entender quais instruções, diretivas, operadores e pseudo-instruções são suportados pelo editor para a escrita de programas
- Como verificar quais instruções, diretivas, operadores e pseudo-instruções são suportados pelo simulador através do Help
- Inspecionar o estado do programa através dos registradores
- Explorar e analisar o conteúdo da memória do processador
- Utilizar o console para visualizar saídas do programa e interagir por meio de chamadas de sistema (`ecall`)
- Configurar as opções do simulador

Ao final deste guia, você deverá estar confortável em utilizar o **ÆRIS** para experimentar programas em assembly RV32I e observar como eles são executados passo a passo.