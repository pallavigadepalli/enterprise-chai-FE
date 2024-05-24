import axiosInterceptorInstance from "../../axiosInterceptorInstance";

export interface Conversation {
    id: string
    created_at: string
    updated_at: string
    is_active: boolean
    is_deleted: boolean
    minutes: number
    point_of_contact: string
    customer_name: string
    description: string
    journey_phase: string
}
export const getConversation: Promise<any> = async (id: string, headers) => {
    const response = await axiosInterceptorInstance.get( '/companion-session/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + headers.cookies
        }
    })
    return await response.data
}

export const patchConversation = async (id: string, data: any, token: string) => {
    const response = await axiosInterceptorInstance.patch( '/companion-session/' + id + '/', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
    return  await response.data
}
