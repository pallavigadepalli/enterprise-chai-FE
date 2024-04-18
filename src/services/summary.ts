import {cookies} from "next/headers";

export const getSummary: Promise<any> = async (id: string) => {
    const token = cookies().get('token').value
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/summary?companion_session_id=' + id, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token
        }
    })

    const summary: any[] = await response.json()
    //retry request if summary is an empty array
    if (summary.length === 0) {
        return await getSummary(id)
    }
    return summary
}

