import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import {sendMail} from "@/mail";

type ResponseData = {
    message: string,
    name: string,
    email: string,
    title: string,
}

export async function POST(
    req: Request,
) {

    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const title = formData.get('title')
    const message = formData.get('message')

    await sendMail(
        "EnterpriseCHAIR Contact Form Submission from - " + name,
        "pallavig@gmail.com",
        `${name} has sent you a message from the EnterpriseCHAI contact form. \n\nName: ${name} \nEmail: ${email} \nTitle: ${title} \nMessage: ${message}`
    );
    return NextResponse.json({status: 200})



}
