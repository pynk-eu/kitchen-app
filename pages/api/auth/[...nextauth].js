import dbConnect from "@/db/connect";
import clientPromise from "@/db/mongoDBConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          // This ID is required but it will not be saved in your users collection
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,

          // You can add any other properties you want to the user object
          admin: false,
          preferedColors: ["#dddddd", "#ffffff"],
        };
      },
    }),
    // ...add more providers here
    // GoogleProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // })
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }) {
      // The user object from the database contains the ID of the user in your database

      session.user.userId = user.id;

      // With the code above you can add the user ID to the session object and use it in your pages

      // Make sure you console.log the session and user objects to see what they contain

      return session;
    },
  },
}

export default NextAuth(authOptions)