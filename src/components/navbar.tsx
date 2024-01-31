import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white py-4 border-b border-primary">
            <div className="mx-auto flex items-center justify-between">
                <a className="flex brand-name text-xl place-items-center" href={'/'}>
                    <span>Enterprise</span>
                    <Image src="/cup_logo.svg" alt="Logo" width={50} height={50} className={'mx-1 mb-3'}/>
                    <span className={'font-semibold'}>CH</span>
                    <span className={'font-semibold'}>AI</span>
                </a>
                <div className="md:flex">
                    <a href="/contact" className="text-gray-600 hover:text-gray-800 mr-4 self-center">Contact</a>
                    <button className="bg-primary text-white w-40 h-12 rounded-md">
                        Beta sign up
                    </button>
                </div>
            </div>
        </nav>
    )
}
