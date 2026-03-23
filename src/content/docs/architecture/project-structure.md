---
description: Overview of the ÆRIS simulator repository structure.
title: Project Structure
---

The **ÆRIS** repository is organized to clearly separate:

- simulation logic
- application orchestration
- graphical interface components

Most of the simulator implementation is located in:

    src/app/simulator/

This directory contains the CPU model, the assembler, the application
use cases, and the interface components.

------------------------------------------------------------------------

# High-Level Structure

    aeris/
      src/
        app/
          simulator/
            core/        # Simulation engine and architecture logic
            features/    # Angular interface components
        assets/          # Icons and static resources
        styles/          # Global styles
        main.ts

    angular.json
    package.json
    tsconfig.json

------------------------------------------------------------------------

# Core Layer

    src/app/simulator/core/

The **core** layer contains the simulation engine and most of the
simulator's logic.

This code is mostly **framework-independent TypeScript**, allowing the
simulation engine to remain decoupled from Angular.

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

**Adapters** provide concrete implementations for the interfaces defined
in the **ports** layer.

They connect the simulation engine to interface services and browser APIs.

### Examples

| Adapter | Purpose |
|--------|--------|
| `file-saver.adapter` | Save files to disk |
| `mat-snackbar.adapter` | UI notifications |
| `memory-console.adapter` | Console output |
| `runtime-settings.adapter` | Settings persistence |
| `syscall.adapter` | Connect syscalls to the interface |

------------------------------------------------------------------------

# Application Layer

    core/application/

Defines the main **use cases** of the simulator.

    application/use-cases/
      AssembleUseCase.ts
      RunProgramUseCase.ts
      DumpUseCase.ts

These use cases coordinate operations such as:

- assembling assembly code
- running programs
- exporting assembled output

------------------------------------------------------------------------

# Domain Layer

    core/domain/

The **domain layer** contains the core logic of the simulator.

It includes:

- code analyzer
- assembler
- CPU implementation
- memory model
- registers
- syscall handling

```
domain/
  analyzer/
  assembler/
  riscv/
  shared/
  simulation/    
```

------------------------------------------------------------------------

# RISC-V CPU Implementation

    domain/riscv/

Implements the simulated **RISC-V processor**.

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

These components simulate the behavior of an **RV32I processor**.

------------------------------------------------------------------------

# State Management

    core/state/

The simulator uses a centralized **store** to manage application state.

    state/
      simulator.facade/
      simulator.state/
      simulator.store/

This state stores information such as:

- source code
- assembled program
- registers
- memory
- execution state
- interface configuration

------------------------------------------------------------------------

# Ports

    core/ports/

**Ports** define interfaces used by the domain layer.

Examples:

    console.port.ts
    file.port.ts
    notify.port.ts
    settings.port.ts
    syscall.port.ts

Adapters implement these interfaces to connect the simulation engine to
external systems.

------------------------------------------------------------------------

# Interface Layer

    src/app/simulator/features/

Contains all **Angular components** that compose the simulator interface.

    features/simulator/
      components/
      dialogs/
      pages/

### Main components

| Component | Purpose |
|-----------|--------|
| `editor` | Code editor |
| `exec` | Instruction execution visualization |
| `runtime` | Execution container that organizes `editor` and `exec` in tabs |
| `console` | Program input and output |
| `registers` | Register visualization |
| `menu` | Main simulator controls |