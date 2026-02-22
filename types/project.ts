import {PortableTextBlock} from "sanity";

export interface Project {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    projectUrl: string;
    repository: string;
    logo: string;
    coverImage: {
        image: string;
        alt: string | null;
        lqip: string;
    };
    description: PortableTextBlock[];
}