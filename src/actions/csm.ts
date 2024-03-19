'use server'
import {z} from "zod";
import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {patchConversation} from "@/services/csm";

export const saveSession = async (
    prevState: string | undefined,
    formData: FormData
) => {
    //journey_phase
    // customer_name
    // point_of_contact
    // description
    const schema = z.object({
        journey_phase: z.string(),
        customer_name: z.string(),
        point_of_contact: z.string(),
        description: z.string(),
    });

    const parse = schema.safeParse({
        journey_phase: formData.get("journey_phase"),
        customer_name: formData.get("customer_name"),
        point_of_contact: formData.get("point_of_contact"),
        description: formData.get("description"),
    });

    if (!parse.success) {
        return { message: parse.error.errors[0].message };
    }
    let apiResponse;
    try {
        const token = cookies().get('token').value
        const data = parse.data;

        const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND + '/companion-session', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            }
        })
        console.log(response)
        if (response.data.error) {
            return { message: response.data.error }
        }
        apiResponse = response.data
        console.log(apiResponse)
    } catch (e) {
        console.log(e)
        return { message: 'failed to create the session'}
    }
    if(formData.has('launch')) {
        redirect('/session/' + apiResponse.id + '/active')
    } else {
        redirect('/home/csm')
    }
}

export const completeConversation = async (id: string) => {
    await patchConversation(id, {is_active: false}, {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + cookies().get('token').value
    })
}
