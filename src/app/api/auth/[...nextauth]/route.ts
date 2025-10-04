import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/config";

const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

export { handlers as GET, handlers as POST };
export { auth, signIn, signOut };
