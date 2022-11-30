import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'
import prisma from "../../../lib/prisma";

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.SECRET,
}

export default NextAuth(authOptions)
