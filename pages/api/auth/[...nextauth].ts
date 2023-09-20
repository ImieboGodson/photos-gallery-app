
import bcrypt from 'bcrypt'
import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import prisma from "@/app/libs/prismadb"


export const authOptions: AuthOptions = ({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password) {
                   throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user || !user.hashPassword) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user?.hashPassword)

                if(!isCorrectPassword) {
                    throw new Error('Invalid credentials')
                }

                return user;
            },
        })
    ],
    pages: {
        signIn: '/'
    },
    session: {
        strategy: 'jwt'
    },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET
})

export default NextAuth(authOptions)