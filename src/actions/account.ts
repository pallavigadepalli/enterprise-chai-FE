"use server";

import { z } from "zod";
//import { redirect } from 'next/navigation'
import {signInApp} from "../../auth";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

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
        if (json.error) {
            return { message: json.error }
        }
    } catch (e) {
        console.log(e)
        return { message: 'failed to create user'}
    }
    redirect("/home/dashboard");

}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        console.log('success')
        const response = await signInApp(formData.get("email") as string, formData.get("password") as string)
        if (response.token) {
            cookies().set('token', response.token)
        }
        console.log(response)
    } catch (error) {
/*        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }*/
        throw error;
    }
    redirect("/home/dashboard");
}

