// https://authjs.dev/getting-started/providers/github
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";


import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
});