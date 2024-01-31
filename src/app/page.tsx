import Image from 'next/image'
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
        <Navbar />
        <div className={'flex items-center mb-8'}>
            <Image src={'/startup-logo.png'} width={140}  height={110} className={'my-10'} alt={'startup'}/>
            <h1 className={'brand-name text-3xl flex ml-auto'}>
                <div> <b>Supercharge </b>
                    your <b>Customer Success Team</b> with&ensp;</div>
                <span> Enterprise</span>
                <span className={'font-semibold'}>CH</span>
                <span className={'font-semibold'}>AI</span>
            </h1>
        </div>
        <section className={'flex md:flex-row sm:flex-col gap-10'}>
            <Image src={'/session1.png'} width={700}  height={500} className="" alt={'chat'}  />
            <article className="flex flex-col  ">
                <div className={'my-10 text-left'}>
                    <li className="text-gray-600 mb-10">Facilitate <b>High-Touch, Rapid Customer Onboarding</b></li>
                    <li className="text-gray-600 mb-10"><b>Shrink</b> Time To Value <b>from 12 to 3 Months</b></li>
                    <li className="text-gray-600 mb-10"><b>Rapid Upskilling</b> for <b>Customer Success Managers</b></li>
                </div>
                <div className={'flex text-center mt-20'}>
                    <p className="text-gray-600 brand-name flex text-center">
                        <div><b>Revolutionize</b> your approach with&ensp;</div>
                        <span>Enterprise</span>
                        <span className={'font-semibold'}>CH</span>
                        <span className={'font-semibold'}>AI</span>
                    </p>
                </div>
                <div className={'text-center'}>
                    <button className="bg-primary text-white px-4 py-2 my-10 ml-18 rounded-md">
                        Book a demo
                    </button>
                </div>
            </article>
        </section>
        <section className={'flex flex-col items-center mt-10'}>
            <p >We support major meeting softwares</p>
            <Image src={'/softwares.png'} width={800}  height={600}  alt={'meeting'}/>
        </section>
    </main>
  )
}
