import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';


const login = async (email: string, password: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/login', {
        method: 'POST',
        body: JSON.stringify(
            {email,password}
        ),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await response.json()
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                     .object({ email: z.string().email(), password: z.string().min(6) })
                     .safeParse(credentials)
                if (parsedCredentials.success) {
                     const { email, password } = parsedCredentials.data;
                     const response = await login(email, password);
                     if (response.error) {
                         throw new Error(response.error);
                     }
                     return response
                 }
                 return null;
            },
        }),
    ],
});
