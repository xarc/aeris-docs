---
description: Visão geral da estrutura do repositório do simulador ÆRIS.
title: Estrutura do Projeto
---

O repositório do **ÆRIS** é organizado para separar claramente:

-   lógica de simulação
-   orquestração da aplicação
-   componentes da interface gráfica

A maior parte da implementação do simulador está localizada em:

    src/app/simulator/

Esse diretório contém o modelo da CPU, o assembler, os casos
de uso da aplicação e os componentes da interface

------------------------------------------------------------------------

# Estrutura de Alto Nível

    aeris/
      src/
        app/
          simulator/
            core/        # Motor de simulação e lógica da arquitetura
            features/    # Componentes da interface Angular
        assets/          # Ícones e recursos estáticos
        styles/          # Estilos globais
        main.ts

    angular.json
    package.json
    tsconfig.json

------------------------------------------------------------------------

# Camada Core

    src/app/simulator/core/

A camada core contém o motor de simulação e a maior parte da lógica
do simulador

Esse código é majoritariamente **TypeScript** independente de framework,
permitindo que o motor de simulação permaneça desacoplado do Angular.

    core/
      adapters/
      application/
      domain/
      monaco/
      pipes/
      ports/
      shared/
      state/
      theme/

------------------------------------------------------------------------

# Adapters

    core/adapters/

Os **adapters** fornecem implementações concretas para as interfaces
definidas na camada de ports.

Eles conectam o motor de simulação com serviços da interface e APIs do
navegador.

### Exemplos
| Adapter | Função |
|---------|--------|
| `file-saver.adapter` | Salvar arquivos no disco |
| `mat-snackbar.adapter` | Notificações da interface |
| `memory-console.adapter` | Saída do console |
| `runtime-settings.adapter` | Persistência de configurações |
| `syscall.adapter` | Conectar syscalls com a interface |

# Camada de Aplicação

    core/application/

Define os casos de uso principais do simulador

    application/use-cases/
      AssembleUseCase.ts
      RunProgramUseCase.ts
      DumpUseCase.ts

Esses casos de uso coordenam operações como:

-   montagem do código assembly
-   execução de programas
-   exportação do código montado

------------------------------------------------------------------------

# Camada de Domínio

    core/domain/

A camada de **domínio** contém a lógica principal do simulador.

Inclui:

-   analisador de código
-   assembler
-   implementação da CPU
-   modelo de memória
-   registradores
-   tratamento de syscalls

 
```
domain/
  analyzer/
  assembler/
  riscv/
  shared/
  simulation/    
```

------------------------------------------------------------------------

# Implementação da CPU RISC-V

    domain/riscv/

Implementa o processador **RISC-V** simulado

    riscv/
      CPU.ts
      CPUInitializer.ts
      ExecutionEngine.ts
      Instruction.ts

      state/
        Memory.ts
        ProgramCounter.ts
        RegisterFile.ts

      syscall/
        SyscallHandler.ts
        SyscallCodes.ts

      units/
        ALU.ts
        Control.ts
        ImmediateGenerator.ts

Esses componentes simulam o comportamento de um processador **RV32I**.

------------------------------------------------------------------------

# Gerenciamento de Estado

    core/state/

O simulador utiliza um store centralizado para gerenciar o estado da
aplicação.

    state/
      simulator.facade/
      simulator.state/
      simulator.store/

Esse estado mantém informações como:

-   código fonte
-   programa montado
-   registradores
-   memória
-   estado de execução
-   configuração da interface

------------------------------------------------------------------------

# Ports

    core/ports/

Os **ports** definem interfaces utilizadas pela camada de domínio

Exemplos:

    console.port.ts
    file.port.ts
    notify.port.ts
    settings.port.ts
    syscall.port.ts

Os **adapters** implementam essas interfaces para conectar o motor de
simulação com sistemas externos

------------------------------------------------------------------------

# Camada de Interface

    src/app/simulator/features/

Contém todos os componentes **Angular** da interface do simulador

    features/simulator/
      components/
      dialogs/
      pages/

### Principais componentes

| Componente | Função |
|------------|--------|
| `editor` | Editor de código |
| `exec` | Visualização da execução das instruções |
| `runtime` | Container de execução que organiza `editor` e `exec` em abas |
| `console` | Entrada e saída do programa |
| `registers` | Visualização dos registradores |
| `menu` | Controles principais do simulador |