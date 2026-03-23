import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMermaid from "remark-mermaidjs";

export default defineConfig({
  site: "https://edusrc.github.io/aeris-docs/",
  base: "/aeris-docs/",
  trailingSlash: "always",

  integrations: [
    starlight({
      title: "ÆRIS DOCS",
      customCss: ["./src/styles/theme.css"],

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
          icon: "github",
          label: "GitHub",
          href: "https://github.com/edusrc/aeris",
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
