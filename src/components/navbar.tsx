import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white py-4 border-b border-primary">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-end brand-name text-xl">
                    <span>Enterprise</span>
                    <Image src="/cup_logo.svg" alt="Logo" width={50} height={50} className={'mx-1'}/>
                    <span className={'font-semibold'}>CH</span>
                    <span className={'font-semibold'}>AI</span>
                </div>
                <div className="md:flex items-end">
                    <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">Contact</a>
                    <button className="bg-primary text-white px-4 py-2 rounded-md">
                        Sign up for beta
                    </button>
                </div>
            </div>
        </nav>
    )
}
