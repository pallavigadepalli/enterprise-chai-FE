'use server'
import {cookies} from "next/headers";
import axiosInterceptorInstance from "../../axiosInterceptorInstance";

export const getProducts = async () => {
    try {
        const token = cookies().get('token').value
        const response = await axiosInterceptorInstance.get( '/product', {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.data
        if (json.error) {
            return { products: [] }
        }
        return { products: json }
    } catch (e) {
        return { products: [] }
    }
}
