import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white py-5 border-b border-primary">
            <div className="mx-auto flex items-center justify-between">
                <a className="flex brand-name text-2xl text-white place-items-center" href={'/'}>
                    <span>Enterprise</span>
                    <Image src="/cup_logo.svg" alt="Logo" width={43} height={45} className={'mx-1 mb-3'}/>
                    <span className={'font-medium'}>CH</span>
                    <span className={'font-medium'}>AI</span>
                </a>
                <div className="gap-x-10 md:flex">
                    <a href="/contact" className="text-gray-600 hover:text-gray-800 mr-4 self-center font-bold">Contact us</a>
                    <button className="bg-primary text-white w-40 h-12 rounded-md">
                        Beta sign up
                    </button>
                </div>
            </div>
        </nav>
    )
}
