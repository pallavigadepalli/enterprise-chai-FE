import Image from "next/image";

export default function Aside() {
    return <aside className="w-48 bg-customGradient p-1">
        <div className="flex mt-4 p-x-1.5 justify-center">
            <span className={'text-primarySmall text-base font-medium'}>Enterprise</span>
            <Image src="/cup_logo.svg" alt="Logo" width={26} height={16} className={'mx-1'}/>
            <span className={'text-primarySmall  text-base font-bold'}>CH</span>
            <span className={'text-greenLogo text-base font-bold'}>AI</span>
        </div>

        <div className="flex flex-col mt-16">
            <a className="btn-dashboard" href={'/home/dashboard'}>
                <Image src={'/Dashboard.svg'} alt='dashboard logo' width={18} height={18}/>
                Dashboard
            </a>
            <a className="btn-dashboard" href={'/home/intents'}>
                <Image src={'/Intent.svg'} alt='intent logo' width={18} height={18}/>
                Set intent
            </a>
            <a className="btn-dashboard" href={'/home/materials'}>
                <Image src={'/Materials.svg'} alt='materials logo' width={18} height={18}/>
                Materials
            </a>
            <a className="btn-dashboard" href={'/home/csm'}>
                <Image src={'/Launch.svg'} alt='launch logo' width={18} height={18}/>
                CSM Companion
            </a>
        </div>

    </aside>
}
