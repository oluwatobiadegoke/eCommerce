import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { comparePassword } from "../../../utils/password";
import { connectToDatabase } from "../../../utils/database";

// interface Session {
//     user: {
//         email: string;
//         password: string;
//         userId: string;
//     }
// }

export default NextAuth({
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.userId = user.userId;
      }
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      const sessionUser = session;
      if (sessionUser) sessionUser.userId = user.userId;
      return Promise.resolve(session);
    },
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: { email: string; password: string }) {
        const { email, password } = credentials;
        const client = await connectToDatabase();
        const users = client.db().collection("users");
        const user = await users.findOne({ email });

        if (!user) {
          client.close();
          throw new Error("User not found");
        }
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
          client.close();
          throw new Error("Password does not match");
        }
        client.close();
        return Promise.resolve(user);
      },
    }),
  ],
});
