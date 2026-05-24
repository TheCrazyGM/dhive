import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pollen",
  description: "Modern, secure, and zero-dependency TypeScript SDK for the Hive blockchain",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    logo: "/pollen-logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Migration from dhive", link: "/guide/migration" },
          { text: "Security & Noble", link: "/guide/security" },
        ],
      },
      {
        text: "API Reference",
        link: "/api/",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/srbde/pollen" }],

    footer: {
      message: "Powered by Pollen 🌸",
      copyright:
        "Copyright © 2026 Sustainable Resource and Business Development Enterprise (SRBDE)",
    },
  },
});
