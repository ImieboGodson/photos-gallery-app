import { User } from '@prisma/client'

export type SafeUser = Omit<User, "emailVerified" | "createdAt" | "updatedAt"> & {
    emailVerified: string | null;
    createdAt: string;
    updatedAt: string;
    
}

export type Photo = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};