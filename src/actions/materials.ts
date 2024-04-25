'use server'
import {cookies} from "next/headers";
import axios from "axios";
import {z} from "zod";
import {redirect} from "next/navigation";

export const  saveFile = async (
    prevState: string | undefined,
    formData: FormData
) => {

    const schema = z.object({
        file: z
            .any()
    });

    const parse = schema.safeParse({
        documents: formData.get("documents"),
        company: formData.get("company"),
        tags: formData.get("tags"),
        name: formData.get("name"),
    });

    if (!parse.success) {
        return { message: parse.error.errors[0].message };
    }
    try {
        const token = cookies()?.get('token')?.value

        const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND + '/product/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + token,
            }
        })
        console.log(response)
        if (response.data.error) {
            return { message: response.data.error }
        }
    } catch (e) {
        console.log(e)
        return { message: 'failed to upload file'}
    }
    redirect('/home/materials')

}
