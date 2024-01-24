import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white p-4 border-b border-primary">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center brand-name">

                        <span>Enterprise</span>
                    <Image src="/Cup logo.svg" alt="Logo" width={50} height={50}/>
                    <span>CH</span>
                        <span>AI</span>

                </div>

                <div className="md:flex items-center">
                    <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">Contact</a>
                    <button className="bg-primary text-white px-4 py-2">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </nav>
    )
}
