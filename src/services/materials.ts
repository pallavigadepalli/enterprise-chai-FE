'use server'
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import axiosInterceptorInstance from "../../axiosInterceptorInstance";

export const getMaterials = async () => {
    try {
        const token = cookies().get('token').value
        const response = await axiosInterceptorInstance.get( '/materials', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.data
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
        const response = await axiosInterceptorInstance.get('/template', {
            headers: {
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.data
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
    await axiosInterceptorInstance.delete( '/materials/' + id + '/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token,
        }
    })

    revalidatePath('/')
}
