import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

type LoginResponse = {
    token: string;
}
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
    return await response.json() as Promise<LoginResponse>
}

export const  signInApp = async (email: string, password: string) => {
    const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse({ email, password });
    if (!parsedCredentials.success) {
        return { message: 'Invalid credentials' };
    }
    const credentials = parsedCredentials.data;
    const response = await login(credentials.email, credentials.password);
    if (response.token) {
        return { token: response.token, email: credentials.email }
    }
    return { message: 'Invalid credentials' };
}
