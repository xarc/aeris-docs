---
title: Introduction
---

# ÆRIS - Advanced Educational RISC-V Simulator

**ÆRIS** is a browser-based RISC-V assembly simulator designed to help students learn computer architecture. It provides an environment where users can write, assemble, and execute **RV32I assembly programs** directly in the browser.

The simulator allows users to observe how a RISC-V program behaves at the instruction level, making it easier to understand how registers, memory, and control flow interact during execution.

## What ÆRIS Does

**ÆRIS** receives RISC-V assembly source code and processes it through the typical stages of program execution:

1. **Parsing** the source code into structured instructions and directives (`.text`, `.data`)
2. **Assembling** the instructions into 32-bit machine code following the RISC-V specification
3. **Executing** the instructions on a simulated processor containing registers, memory, and an ALU
4. **Displaying** the simulation state. This state is represented by an internal object that stores the current program information, including registers, memory, and the program counter (PC), and presents this data in the user interface.

All simulator processing occurs directly in the browser, from code parsing to instruction execution and visualization of the program state.

## Educational Goals

**ÆRIS** was designed to make key computer architecture concepts easier to understand by allowing them to be observed in real time. The tool allows students to explore:

- RISC-V instruction formats (R, I, S, B, U, and J)
- How instructions modify registers and memory
- The role of the **program counter (PC)** in controlling execution
- How pseudo-instructions expand into real instructions
- How system calls interact with the execution environment
- How `.data` and `.text` segments are represented in memory

By executing programs step by step, users can precisely observe how the program state evolves during execution.

## Scope

**ÆRIS** is an educational simulator focused on learning the RISC-V architecture and assembly programming. The simulator is based exclusively on the **RV32I instruction set**, which processes 32-bit integer operations.

The simulator provides learning-oriented features, including step-by-step or continuous program execution, visualization of the processor state during execution, and support for importing and exporting assembly code, as well as generating binary and hexadecimal output files. It also supports pseudo-instructions and system calls (`ecall`), allowing interaction with the simulator’s execution environment.

To keep the simulator simple and focused on educational purposes, some features commonly found in more complete development tools are not implemented. These include:

- breakpoints
- pipeline or cache simulation
- integration with physical hardware
- performance analysis or bottleneck detection