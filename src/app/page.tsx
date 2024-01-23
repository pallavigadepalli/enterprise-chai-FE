import Image from 'next/image'
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="px-24 min-h-screen">
        <Navbar/>
        <Image src={'/startup-logo.png'} width={190}  height={160} className={'my-10'} alt={'startup'}/>
        <section className={'flex md:flex-row sm:flex-col'}>
            <article className="flex-1 flex flex-col text-center">
                <h3 className="text-2xl text-gray-800  self-center brand-name">
                    <span>Transform your <b>Customer Success </b><br/><b>Managers</b> into <b>Superstars</b> with</span>
                    <br/>
                    <span>Enterprise</span>
                    <span>CH</span>
                    <span>AI</span>
                </h3>
                <div className={'my-10'}>
                    <li className="text-gray-600 ">Facilitate High-Touch, Rapid Customer Onboarding</li>
                    <li className="text-gray-600 ">Shrink Time To Value from 12 to 3 Months.</li>
                    <li className="text-gray-600 ">Rapid Upskilling for Customer Success Managers </li>
                </div>
                <p className="text-gray-600 brand-name">
                    <span>Revolutionize your approach with </span>
                    <span>Enterprise</span>
                    <span>CH</span>
                    <span>AI</span>
                </p>
                <div>
                    <button className="bg-primary text-white px-4 py-2 my-10">
                        Get Started now
                    </button>
                </div>
            </article>
            <Image src={'/session.png'} width={800}  height={600} className="flex-1" alt={'session'}/>
        </section>
        <section className={'flex flex-col items-center'}>
            <p >We support major meeting softwares</p>
            <Image src={'/softwares.png'} width={800}  height={600}  alt={'meeting'}/>
        </section>
    </main>
  )
}
