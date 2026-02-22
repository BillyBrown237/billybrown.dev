import {PortableTextBlock} from "sanity";

export interface Profile {
    _id: string;
    fullName: string;
    headline: string;
    profileImage: {
        image: string;
        lqip: string;
        alt: string;
    };
    shortBio: string;
    email: string;
    fullBio: PortableTextBlock[];
    location: string;
    resumeURL: string;
    og: string;
    usage: PortableTextBlock[];
};