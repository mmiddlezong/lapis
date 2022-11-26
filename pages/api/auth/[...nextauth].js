import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
    session: {
        strategy: "jwt",
    },

    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        //signIn: "/auth/signin",
    }
}

export default NextAuth(authOptions)
