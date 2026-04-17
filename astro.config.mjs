import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMermaid from "remark-mermaidjs";

export default defineConfig({
  site: "https://xarc.github.io/aeris-docs/",
  base: "/aeris-docs/",
  trailingSlash: "always",

  integrations: [
    starlight({
      title: "ÆRIS DOCS",
      customCss: ["./src/styles/theme.css"],
      tableOfContents: false,

      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        pt: {
          label: "Português",
          lang: "pt-BR",
        },
      },

      social: [
        {
          icon: "star",
          label: "ÆRIS",
          href: "https://xarc.org/aeris/",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/xarc/aeris",
        },
      ],

      sidebar: [
        {
          label: "Introduction",
          translations: {
            "pt-BR": "Introdução",
          },
          items: [
            {
              label: "Overview",
              translations: {
                "pt-BR": "Visão Geral",
              },
              link: "/introduction/",
            },
          ],
        },

        {
          label: "Use Guide",
          translations: {
            "pt-BR": "Guia de Uso",
          },
          items: [
            {
              label: "Overview",
              translations: { "pt-BR": "Visão Geral" },
              link: "/use-guide/overview/",
            },
            {
              label: "Options Menu",
              translations: { "pt-BR": "Menu de Opções" },
              link: "/use-guide/menu/",
            },
            {
              label: "Editor Panel",
              translations: { "pt-BR": "Painel de Edição" },
              link: "/use-guide/editor/",
            },
            {
              label: "Execution Panel",
              translations: { "pt-BR": "Painel de Execução" },
              link: "/use-guide/execution/",
            },
            {
              label: "Register Panel",
              translations: { "pt-BR": "Painel de Registradores" },
              link: "/use-guide/registers/",
            },
            {
              label: "Console",
              translations: { "pt-BR": "Console" },
              link: "/use-guide/console/",
            },
          ],
        },

        {
          label: "Architecture",
          translations: {
            pt: "Arquitetura",
          },
          items: [
            {
              label: "Overview",
              translations: { "pt-BR": "Visão Geral" },
              link: "/architecture/overview/",
            },
            // {
            //   label: "Simulation Engine",
            //   translations: { "pt-BR": "Motor de Simulação" },
            //   link: "/architecture/simulation-engine/",
            // },
            {
              label: "Project Structure",
              translations: { "pt-BR": "Estrutura do Projeto" },
              link: "/architecture/project-structure/",
            },
          ],
        },

        {
          label: "RISC-V",
          items: [
            {
              label: "Overview",
              translations: { "pt-BR": "Visão Geral" },
              link: "/riscv/overview/",
            },
            {
              label: "Instructions",
              translations: { "pt-BR": "Instruções" },
              link: "/riscv/instructions/",
            },
            {
              label: "Pseudo Instructions",
              translations: { "pt-BR": "Pseudo-instruções" },
              link: "/riscv/pseudo-instructions/",
            },
            {
              label: "Directives",
              translations: { "pt-BR": "Diretivas" },
              link: "/riscv/directives/",
            },
            {
              label: "Syscalls",
              translations: { "pt-BR": "Syscalls" },
              link: "/riscv/syscalls/",
            },
          ],
        },

        {
          label: "Exercises",
          translations: {
            "pt-BR": "Exercícios",
          },
          items: [
            {
              label: "Overview",
              translations: { "pt-BR": "Visão Geral" },
              link: "/exercises/",
            },
            {
              label: "Exercise 1",
              translations: { "pt-BR": "Exercício 1" },
              link: "/exercises/exercise-1/",
            },
            {
              label: "Exercise 2",
              translations: { "pt-BR": "Exercício 2" },
              link: "/exercises/exercise-2/",
            },
            {
              label: "Exercise 3",
              translations: { "pt-BR": "Exercício 3" },
              link: "/exercises/exercise-3/",
            },
            {
              label: "Exercise 4",
              translations: { "pt-BR": "Exercício 4" },
              link: "/exercises/exercise-4/",
            },
            {
              label: "Exercise 5",
              translations: { "pt-BR": "Exercício 5" },
              link: "/exercises/exercise-5/",
            },
            {
              label: "Exercise 6",
              translations: { "pt-BR": "Exercício 6" },
              link: "/exercises/exercise-6/",
            },
            {
              label: "Exercise 7",
              translations: { "pt-BR": "Exercício 7" },
              link: "/exercises/exercise-7/",
            },
            {
              label: "Exercise 8",
              translations: { "pt-BR": "Exercício 8" },
              link: "/exercises/exercise-8/",
            },
          ],
        },

        // {
        //   label: "Articles",
        //   translations: {
        //     "pt-BR": "Artigos",
        //   },
        //   items: [
        //     {
        //       label: "Articles",
        //       translations: { "pt-BR": "Artigos" },
        //       link: "/articles/",
        //     },
        //   ],
        // },
      ],
    }),
  ],

  markdown: {
    remarkPlugins: [remarkMermaid],
  },
});
