import {
  BiLinkExternal,
  BiLogoCodepen,
  BiLogoDribbble,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoStackOverflow,
  BiLogoSteam,
  BiLogoUnsplash,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaFreeCodeCamp, FaProductHunt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaHashnode, FaHashtag, FaSquareXTwitter } from "react-icons/fa6";

export type SocialLinksEnum = "social" | "publication";

export type SocialData = {
    id: number;
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
    status: SocialLinksEnum;
    isVisible: boolean;
}

export const SOCIAL_LINKS: SocialData[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/billybrown237",
    icon: BiLogoGithub,
    status: "social",
    isVisible: true,
  },
  {
    id: 2,
    name: "X",
    url: "https://twitter.com/dekoubrown",
    icon: FaSquareXTwitter,
    status: "social",
    isVisible: true,
  },
  {
    id: 3,
    name: "Linkedin",
    url: "https://linkedin.com/in/dbillybrown",
    icon: BiLogoLinkedinSquare,
    status: "social",
    isVisible: true,
  },
  {
    id: 4,
    name: "Codepen",
    url: "https://codepen.io/evavic44",
    icon: BiLogoCodepen,
    status: "social",
    isVisible: false,
  },
  {
    id: 5,
    name: "Dribbble",
    url: "https://dribbble.com/victoreke",
    icon: BiLogoDribbble,
    status: "social",
    isVisible: false,
  },
  {
    id: 6,
    name: "Instagram",
    url: "https://instagram.com/victorekea",
    icon: BiLogoInstagram,
    status: "social",
    isVisible: false,
  },
  {
    id: 7,
    name: "Steam",
    url: "https://steamcommunity.com/id/victoreke/",
    icon: BiLogoSteam,
    status: "social",
    isVisible: false,
  },
  {
    id: 8,
    name: "Unsplash",
    url: "https://unsplash.com/@victoreke",
    icon: BiLogoUnsplash,
    status: "social",
    isVisible: false,
  },
  {
    id: 9,
    name: "FreeCodeCamp",
    url: "https://freecodecamp.org/news/author/victoreke/",
    icon: FaFreeCodeCamp,
    status: "publication",
    isVisible: false,
  },
  {
    id: 10,
    name: "Hashnode",
    url: "https://eke.hashnode.dev",
    icon: FaHashnode,
    status: "publication",
    isVisible: false,
  },
  {
    id: 11,
    name: "Sanity",
    url: "https://www.sanity.io/exchange/community/victoreke",
    icon: FaHashtag,
    status: "publication",
    isVisible: false,
  },
  {
    id: 12,
    name: "Youtube",
    url: "https://youtube.com/@victorekea",
    icon: BiLogoYoutube,
    status: "social",
    isVisible: false,
  },
  {
    id: 13,
    name: "Daily.dev",
    url: "https://app.daily.dev/eke",
    icon: BiLinkExternal,
    status: "social",
    isVisible: false,
  },
  {
    id: 14,
    name: "Producthunt",
    url: "https://www.producthunt.com/@victorekea",
    icon: FaProductHunt,
    status: "social",
    isVisible: false,
  },
  {
    id: 15,
    name: "Stackoverflow",
    url: "https://stackoverflow.com/users/14021166/victor-eke",
    icon: BiLogoStackOverflow,
    status: "social",
    isVisible: false,
  },
  {
    id: 16,
    name: "Codewars",
    url: "https://www.codewars.com/users/victoreke",
    icon: SiCodewars,
    status: "social",
    isVisible: false,
  },
  {
    id: 17,
    name: "Gitlab",
    url: "https://gitlab.com/billy.billybrown",
    icon: BiLogoGitlab,
    status: "social",
    isVisible: true,
  },
];