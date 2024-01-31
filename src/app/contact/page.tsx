'use client';
export default function Contact() {
    const createAccount = async (formData: FormData) => {

        try {

            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])

            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    return (
        <main className={'bg-secondary p-12 mt-5'}>
            <form action={createAccount} className="mt-6">
                <h1 className="text-2xl font-semibold mb-4">
                    We are jazzed you want to try our product out.
                </h1>
                <p>Please sign up here so we can reach you when the beta is ready!</p>
                <label className="block mb-2">
                    <span className="text-gray-700">Your name:</span>
                    <input
                        type="text"
                        className="form-input mt-1 block w-full"
                        required
                        name={'name'}
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">Your email:</span>
                    <input
                        type="email"
                        className="form-input mt-1 block w-full"
                        required
                        name={'email'}
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">Your title:</span>
                    <input
                        type="text"
                        className="form-input mt-1 block w-full"
                        required
                        name={'title'}
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">Why are you excited about this? (optional):</span>
                    <textarea
                        className="form-textarea mt-1 block w-full"
                        rows={3}
                        name={'message'}
                    />
                </label>
                <br />
                <button type="submit" className="bg-primary text-white px-4 py-2 my-10 ml-18 rounded-md">
                    Sign Up
                </button>
            </form>
        </main>
    )
}
