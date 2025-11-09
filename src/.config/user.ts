import type { UserConfig } from "~/types";

export const userConfig: Partial<UserConfig> = {
  site: {
    title: "Aeroplanini Di Carta",
    subtitle: "",
    author: "Iron16Bit",
    description: "Parole espresse al vento, pensieri liberi di fluire",
    pageSize: 5,
    socialLinks: [
      {
        name: "github",
        href: "https://github.com/Iron16Bit",
      },
    ],
    navLinks: [
      {
        name: "Posts",
        href: "/",
      },
      {
        name: "Archive",
        href: "/archive",
      },
      {
        name: "Categories",
        href: "/categories",
      },
      {
        name: "About",
        href: "/about",
      },
    ],
    categoryMap: [{ name: "胡适", path: "hu-shi" }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Original Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
    ],
  },
  appearance: {
    theme: "system",
    locale: "it-it",
    colorsLight: {
      primary: "#2e405b",
      background: "#ffffff",
    },
    colorsDark: {
      primary: "#FFFFFF",
      background: "#232222",
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
};
