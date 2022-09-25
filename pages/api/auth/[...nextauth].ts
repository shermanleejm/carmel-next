import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT,
      clientSecret: process.env.GOOGLE_AUTH_SECRET,
    })
  ],
  secret: process.env.JWT_SECRET
})