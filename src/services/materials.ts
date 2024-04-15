'use server'
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

export const getMaterials = async () => {
    try {
        const token = cookies().get('token').value
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/materials', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.json()
        if (json.error) {
            return { materials: [] }
        }
        return { materials: json }
    } catch (e) {
        console.log(e)
        return { materials: [] }
    }
}

export const getTemplates = async () => {
    try {
        const token = cookies().get('token').value
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/template', {
            headers: {
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.json()
        if (json.error) {
            return []
        }
        return { templates: json }
    } catch (e) {
        console.log(e)
        return []
    }
}

export const deleteMaterial = async (formData) => {
    const id = formData.get('id')
    const token = cookies().get('token').value
    await fetch(process.env.NEXT_PUBLIC_BACKEND + '/materials/' + id + '/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token,
        }
    })

    revalidatePath('/')
}
