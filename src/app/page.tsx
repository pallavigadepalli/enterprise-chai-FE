import Image from 'next/image'
import Navbar from "@/components/navbar";

export default function Home() {
    const meetingSoftwareLogos = [
        {
            name: 'Microsoft Teams',
            src: '/teams_logo.png'
        },
        {
            name: 'Google Meet',
            src: '/google_meet_logo.png'
        },
        {
            name: 'Zoom Meeting',
            src: '/zoom_logo.png'
        }
    ]
  return (
    <main className={'xl:px-36 lg:px-24'}>
        <Navbar/>
        <div className={'flex items-center mb-8'}>
            <Image src={'/startup-logo.png'} width={126}  height={50} className={'my-10'} alt={'startup'}/>
            <h1 className={'md:justify-end xl:justify-normal text-2xl xl:text-3xl flex  xl:ml-10 w-full'}>
                    <span className={'font-semibold'}>Supercharge&ensp;</span>
                    <span>your&ensp;</span>
                    <span className={'font-semibold'}>Customer Success Team&ensp;</span>
                    <span>with&ensp;</span>
                    <span className={'text-primarySmall font-medium'}>Enterprise</span>
                    <span className={'text-primarySmall font-bold'}>CH</span>
                    <span className={'text-greenLogo font-bold'}>AI</span>
            </h1>
        </div>
        <section className={'flex md:flex-row sm:flex-col gap-16'}>
            <a href={'/session/active'}>
                <Image src={'/chat.svg'} width={685}  height={511} className="" alt={'chat'}  />
            </a>
            <article className="flex flex-col self-center  ">
                <div className={'my-10 text-left'}>
                    <li className="text-gray-600 mb-5 font-semibold text-lg">
                        Facilitate High-Touch, Rapid Customer Onboarding
                    </li>
                    <li className="text-gray-600 mb-5 font-semibold text-lg">Shrink Time To Value from 12 to 3 Months</li>
                    <li className="text-gray-600 mb-5 font-semibold text-lg">Rapid Upskilling for Customer Success Managers</li>
                </div>
                <div className={'pl-14'}>
                    <p className="text-gray-600 brand-name flex text-center">
                        <div><b>Revolutionize</b> your approach with&ensp;</div>
                        <span>Enterprise</span>
                        <span className={'font-semibold'}>CH</span>
                        <span className={'font-semibold'}>AI</span>
                    </p>
                </div>
                <div className={'text-center'}>
                    <button className="bg-primary text-white px-4 py-2 my-10 ml-18 rounded">
                        Book a demo
                    </button>
                </div>
            </article>
        </section>

        <section className={'mt-10 text-center'}>
            <p className="mb-10">We support major meeting softwares</p>
            <div className={'flex justify-center gap-10 '}>
                {
                    meetingSoftwareLogos.map((logo, index) => (
                        <div className={'flex items-center gap-3'} key={index}>
                            <Image src={logo.src} width={48}  height={48} className="" alt={logo.name}/>
                            <span >{logo.name}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    </main>
  )
}
