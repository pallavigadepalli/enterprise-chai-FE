'use client';
import Navbar from "../../components/navbar";


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
        <main className="">
            <Navbar />
            <div className="flex gap-x-12 py-12">
                <div>
                    <h2>Get in touch</h2>
                    <p className="w-full md:w-[259px]">
                        Have a question, suggestion, 
                        or just want to share some positivity?
                        We&apos;d love to hear from you!
                    </p>
                </div>
            <div>
            <form action={createAccount} className="w-[592px] h-[502px] mt-6">
                <label className="w-4/6 h-20 mb-2">
                    <span className="text-gray-700">email*</span>
                    <input
                        type="email"
                        className="form-input mt-1 block w-full rounded-md border border-gray-400 p-4"
                        required
                        name={'email'}
                        placeholder="email"
                    />
                </label>
                <label className="block mb-2">
                    <span className="text-gray-700">first name*</span>
                    <input
                        type="text"
                        className="form-input mt-1 block w-full"
                        required
                        name={'name'}
                        placeholder="first name"
                    />
                </label>
                <label className="block mb-2">
                    <span className="text-gray-700">last name*</span>
                    <input
                        type="text"
                        className="form-input mt-1 block w-full"
                        required
                        name={'title'}
                        placeholder="last name"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">message</span>
                    <textarea
                        className="form-textarea mt-1 block w-full"
                        rows={3}
                        name={'message'}
                        placeholder="message"
                    />
                </label>
                <br />
                <br />
                <p>
                EnterpiseCHAI is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                </p>
                <button type="submit" className="btn-primary">
                    Sign Up
                </button>
            </form>
            </div>
            </div>
        </main>
    )
}
