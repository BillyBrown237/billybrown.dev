import {
    HiBeaker,
    HiBookmarkAlt,
    HiCamera,
    HiUser,
} from "react-icons/hi";
export const DESKTOP_ROUTES:{title:string, href:string}[] = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Photos",
        href: "/photos",
    },
];

export const MOBILE_ROUTES = [
    {
        title: "About",
        href: "/about",
        icon: HiUser,
    },
    {
        title: "Projects",
        href: "/projects",
        icon: HiBeaker,
    },
    {
        title: "Blog",
        href: "/blog",
        icon: HiBookmarkAlt,
    },
    {
        title: "Photos",
        href: "/photos",
        icon: HiCamera,
    },
];