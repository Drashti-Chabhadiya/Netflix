import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../models/User';
import { connectToDatabase } from '@/app/lib/mongodb/mongodb';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('credentials in authorize:', credentials);
        try {
          const res = await fetch(`${process.env.NEXT_API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          });
          const user = await res.json();

          if (!res.ok || !user.token) {
            throw new Error(user?.error || 'Login failed');
          }
          return {
            id: user.id || user._id,
            email: user.email,
            token: user.token,
          };
        } catch (error) {
          console.error('Error in authorize:', error);
          throw new Error(error.message || 'Login failed');
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user && account.provider === 'google') {
        token.id_token = account.id_token;
        await connectToDatabase();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account.provider,
            token: account.id_token,
          });
        } else {
          existingUser.token = account.id_token;
          await existingUser.save();
        }
      }
      return token;
    },

    async session({ session, token }) {
      await connectToDatabase();
      const dbUser = await User.findOne({ email: session.user.email });
      if (!dbUser) {
        throw new Error('User not found');
      }
      if (dbUser) {
        session.user.id = dbUser._id;
        session.user.token = dbUser.token;
        session.user.image = dbUser?.image;
        session.user.name = dbUser?.name;
      }

      session.id_token = token.id_token;

      return session;
    },
  },
};
