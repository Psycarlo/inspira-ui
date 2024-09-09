export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Inspira UI",
      description: "Build beautiful websites using Vue.",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.75,
    },
    header: {
      title: "inspira ui",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [
        {
          title: "Docs",
          links: [
            {
              title: "Getting Started",
              to: "/getting-started/introduction",
              description: "Introduction to Inspira UI and its core concepts.",
            },
            {
              title: "Installation",
              to: "/getting-started/installation",
              description:
                "Follow the step-by-step guide to install Inspira UI in your project.",
            },
            {
              title: "Components",
              to: "/components/all",
              description: "Explore all available components and their usage.",
              target: "_self",
            },
          ],
        },
        {
          title: "Credits",
          links: [
            {
              title: "Aceternity UI",
              to: "https://ui.aceternity.com/",
              description:
                "For providing the inspiration and permission to adapt the original designs.",
              target: "_blank",
            },
            {
              title: "shadcn-vue",
              to: "https://www.shadcn-vue.com/",
              description:
                "For the Vue port of shadcn-ui and contributions to some components",
              target: "_blank",
            },
            {
              title: "shadcn-docs-nuxt",
              to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
              description:
                "For the beautifully crafted Nuxt documentation site.",
              target: "_blank",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              title: "GitHub",
              to: "https://github.com/rahulv-official/inspira-ui",
              description: "Source code for Inspira UI.",
              target: "_blank",
            },
            {
              title: "Discord",
              to: "https://discord.gg/Xbh5DwJRc9",
              description: "Connect with community on Discord",
              target: "_blank",
            },
          ],
        },
      ],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
        {
          icon: "lucide:bot",
          to: "https://discord.gg/Xbh5DwJRc9",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2024",
      links: [
        {
          icon: "lucide:globe",
          to: "https://rahulv.dev",
          title: "Maintained by rahulv.dev",
          target: "_blank",
        },
        {
          icon: "lucide:github",
          title: "Github",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/rahulv-official/inspira-ui",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/rahulv-official/inspira-ui/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: true,
    },
  },
});
