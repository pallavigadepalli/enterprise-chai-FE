"use server";

import { z } from "zod";
//import { redirect } from 'next/navigation'
import {signIn} from "../../auth";
import {AuthError} from "next-auth";

export async function createUser(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    });
    const parse = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!parse.success) {
        return { message: "Failed to create todo" };
    }

    const data = parse.data;
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: data.email,
                    username: data.email,
                    password: data.password
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            const json = await response.json()
        //return redirect("/");
    } catch (e) {
        console.log(e)
        return { message: 'failed to create user'}
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        console.log('success')
        const response = await signIn('credentials', {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            redirectTo: '/home/dashboard'
        })
        console.log(response)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

