'use server'
import {cookies} from "next/headers";

export const  saveFile = async (
    prevState: string | undefined,
    formData: FormData
) => {

    try {
        const token = cookies().get('token')
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/upload', {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": `Token ${token. value}`
            }
        })
        const json = await response.json()
        return json
    } catch (e) {
        console.log(e)
        return { message: 'failed to upload file'}
    }
}
