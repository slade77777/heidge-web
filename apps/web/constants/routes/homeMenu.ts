import {
  Discord,
  Facebook,
  Instagram,
  Medium,
  Reddit,
  Telegram,
  Twitter,
  Youtube,
} from "shared/icons";

export const PRIVATE_MENUS = [
  {
    id: "my-hedgies",
    name: "Hedgies",
    path: "/",
  },
  {
    id: "leader-board",
    name: "Leaderboard",
    path: "/",
  },
  {
    id: "house",
    name: "House",
    path: "/",
  },
  {
    id: "my-journeys",
    name: "Journeys",
    path: "/",
  },
  {
    id: "inventory",
    name: "Inventory",
    path: "/",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    path: "/",
  },
];

export const PUBLIC_MENUS = [
  {
    id: "leader-board",
    name: "Leaderboard",
    path: "/",
  },
  {
    id: "the-game",
    name: "The Game",
    path: "/",
  },
  {
    id: "spend-curio",
    name: "Spend Curio",
    path: "/",
  },
];

export const MOBILE_PRIVATE_MENUS = [
  ...PRIVATE_MENUS,
  {
    id: "settings",
    name: "Settings",
    path: "/",
  },
  {
    id: "sign-out",
    name: "Sign Out",
    path: "/",
  },
];

export const MOBILE_PUBLIC_MENUS = [
  ...PUBLIC_MENUS,
  {
    id: "businesses",
    name: "Businesses",
    path: "/",
  },
  {
    id: "team",
    name: "Team",
    path: "/",
  },
  {
    id: "roadmap",
    name: "Roadmap",
    path: "/",
  },
  {
    id: "blog",
    name: "Blog",
    href: "https://medium.com/hellohedgie",
  },
  {
    id: "partner-with-hedgie",
    name: "Partner With Hedgie",
    path: "/",
  },
  {
    id: "faq",
    name: "FAQ",
    path: "/",
  },
  {
    id: "term",
    name: "Terms of Use",
    path: "/",
  },
  {
    id: "policy",
    name: "Privacy Policy",
    path: "/",
  },
  {
    id: "contact",
    name: "Contact Us",
    href: "mailto:hedgie@hedgie.io",
  },
];

export const SOCIALS = [
  { url: "https://t.me/hellohedgie", icon: Telegram },
  { url: "https://discord.gg/mhYwH5G", icon: Discord },
  {
    url: "https://www.instagram.com/hedgieio/",
    icon: Instagram,
  },
  { url: "https://twitter.com/hellohedgie", icon: Twitter },
  {
    url: "https://www.facebook.com/hellohedgie/",
    icon: Facebook,
  },
  { url: "https://medium.com/hellohedgie", icon: Medium },
  {
    url: "https://www.youtube.com/hellohedgie",
    icon: Youtube,
  },
  { url: "https://www.reddit.com/r/Hedgie", icon: Reddit },
];
