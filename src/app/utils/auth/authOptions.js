import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: 'jwt', // or 'database' if you're using a DB
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // or without __Secure if not using HTTPS
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
