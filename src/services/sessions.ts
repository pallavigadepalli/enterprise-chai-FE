import {cookies} from "next/headers";

export const getJourneyPhases = async () => {
    try {
        const token = cookies().get('token').value
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/journey-phase', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.json()
        if (json.error) {
            return { phases: [] }
        }
        return { phases: json }
    } catch (e) {
        console.log(e)
        return { phases: [] }
    }
}


export const getSessions = async () => {
    try {
        const token = cookies().get('token').value
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/companion-session', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token,
            }
        })

        const json = await response.json()
        if (json.error) {
            return { sessions: [] }
        }
        return { sessions: json }
    } catch (e) {
        console.log(e)
        return { sessions: [] }
    }
}
