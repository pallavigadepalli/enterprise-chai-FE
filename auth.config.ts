import type { NextAuthConfig } from 'next-auth';
import { cookies } from 'next/headers'

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
        },
        jwt: async ({ token, user, account, profile, isNewUser }) => {
            if (user) {
                token.token = user.id;
                cookies.set('token', token);
                console.log('jwt', token)
            }
            return token;
        }

    },
    providers: []
} as NextAuthConfig;
