'use server'
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import axiosInterceptorInstance from "../../axiosInterceptorInstance";

export const getJourneyPhases = async () => {
    try {
        const token = cookies().get('token').value
        const response = await axiosInterceptorInstance.get( '/journey-phase', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.data
        if (json.error) {
            return { phases: [] }
        }
        return { phases: json }
    } catch (e) {
        console.log(e)
        return { phases: [] }
    }
}


export const getSessions = async (isPending = true) => {
    try {
        const token = cookies().get('token').value
        const response = await axiosInterceptorInstance.get(
            `/companion-session?is_active=${isPending ? 'True' : 'False' }`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token,
                }
            })
        const json = await response.data
        if (json.error) {
            return { sessions: [] }
        }
        return { sessions: json }
    } catch (e) {
        console.log(e)
        return { sessions: [] }
    }
}

export const deleteSession = async (formData: FormData) => {
    const id = formData.get('id')
    const token = cookies().get('token').value
    await axiosInterceptorInstance.delete( '/companion-session/' + id + '/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token,
        }
    })

    revalidatePath('/')
}
