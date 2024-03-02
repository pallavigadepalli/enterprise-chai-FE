export const  saveFile = async (
    prevState: string | undefined,
    formData: FormData
) => {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/upload', {
            method: 'POST',
            body: formData
        })
        const json = await response.json()
        return json
    } catch (e) {
        console.log(e)
        return { message: 'failed to upload file'}
    }
}
