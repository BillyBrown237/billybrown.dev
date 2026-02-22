import {PortableTextBlock} from "sanity";

export interface Post {
    _id: string;
    _createdAt: string;
    _updatedAt?: string;
    title: string;
    slug: string;
    description: string;
    canonicalLink?: string;
    date?: string;
    coverImage: {
        image: string;
        lqip: string;
        alt: string | null;
    };
    tags: string[];
    author: {
        name: string;
        photo: {
            image: string;
            alt: string;
        };
        twitterUrl: string;
    };
    body: PortableTextBlock[];
    featured: boolean;
    isPublished: boolean;
}