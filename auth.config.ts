import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/home/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/home/dashboard', nextUrl));
            }
            return true;
        },
        session: async ({ session, token, user }) => {
            session.user = user;
            return session;
        },
        signIn: async ({ user, account, profile, email, credentials }) => {
            console.log('sign in')
            return true;
        }

    },
    providers: [], // Add providers with an empty array for now
} as NextAuthConfig;
