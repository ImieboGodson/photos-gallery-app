import { User } from '@prisma/client'

export type SafeUser = Omit<User, "emailVerified" | "createdAt" | "updatedAt"> & {
    emailVerified: string | null;
    createdAt: string;
    updatedAt: string;
    
}

export type UserCollection = {
    id: number;
    title: string,
    published_at: string,
    last_collected_at: string,
    updated_at: string,
    cover_photo: null,
    user: null
}

export type Creator = {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string | null;
    twitter_username: string | null;
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
}

// export type Creator = {
//     id: string;
//     bio: string | null;
//     first_name: string;
//     instagram_username: string | null;
//     last_name: string | null;
//     links: {
//         followers: string;
//         following: string;
//         html: string;
//         likes: string;
//         photos: string;
//         portfolio: string;
//         self: string;
//     };
//     location: string | null;
//     name: string;
//     portfolio_url: string | null;
//     profile_image: {
//         small: string;
//         medium: string;
//         large: string;
//     };
//     total_collections: number;
//     total_likes: number;
//     total_photos: number;
//     twitter_username: string | null;
//     updated_at: string;
//     username: string;
// }

export type Photo = {
    id: string;
    alt_description: string | null;
    tags: string[] | null
    blur_hash: string | null;
    color: string | null;
    description: string | null;
    width: number;
    height: number;
    likes: number;
    urls: {
        full: string;
        regular: string; 
        raw: string; 
        small: string;
        thumb: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    promoted_at: string | null;
    user: Creator;
}