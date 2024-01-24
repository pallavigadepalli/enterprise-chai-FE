import Image from 'next/image'
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="px-24 min-h-screen">
        <Navbar/>
        <div className={'flex items-center justify-between'}>
            <Image src={'/startup-logo.png'} width={190}  height={160} className={'my-10'} alt={'startup'}/>
            <h1 className={'brand-name text-3xl flex'}>
                <div> <b>Supercharge </b>
                    your <b>Customer Success Team</b> with&ensp;</div>
                <span> Enterprise</span>
                <span>CH</span>
                <span>AI</span>
            </h1>
        </div>
        <section className={'flex md:flex-row sm:flex-col gap-10'}>
            <Image src={'/Screen shot.png'} width={800}  height={600} className="flex-1" alt={'session'}/>
            <article className="flex-1 flex flex-col text-left ">
                <div className={'my-10'}>
                    <li className="text-gray-600 mb-10">Facilitate <b>High-Touch, Rapid Customer Onboarding</b></li>
                    <li className="text-gray-600 mb-10"><b>Shrink</b> Time To Value <b>from 12 to 3 Months</b></li>
                    <li className="text-gray-600 mb-10"><b>Rapid Upskilling</b> for <b>Customer Success Managers</b></li>
                </div>
                <div className={'flex text-center mt-28'}>
                    <p className="text-gray-600 brand-name flex text-center">
                        <div><b>Revolutionize</b> your approach with&ensp;</div>
                        <span> Enterprise</span>
                        <span>CH</span>
                        <span>AI</span>
                    </p>
                </div>
                <div className={''}>
                    <button className="bg-primary text-white px-4 py-2 my-10 ml-18">
                        Get Started now
                    </button>
                </div>
            </article>
        </section>
        <section className={'flex flex-col items-center'}>
            <p >We support major meeting softwares</p>
            <Image src={'/softwares.png'} width={800}  height={600}  alt={'meeting'}/>
        </section>
    </main>
  )
}
