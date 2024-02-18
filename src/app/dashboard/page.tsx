import Image from "next/image";
import Header from "@/components/Header";
import Infographics from "@/components/Infographics";
import UpcommingMeeting from "@/components/UpcommingMeeting";
import CustomerJourney from "@/components/CustomerJourney";
import SessionComplete from "@/components/SessionComplete";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <aside className="w-48 bg-customGradient p-1">
        <div className="flex mt-4 p-x-1.5 justify-center">
          <span className={'text-primarySmall text-base font-medium'}>Enterprise</span>
          <Image src="/cup_logo.svg" alt="Logo" width={26} height={16} className={'mx-1'}/>
          <span className={'text-primarySmall  text-base font-bold'}>CH</span>
          <span className={'text-greenLogo text-base font-bold'}>AI</span>
        </div>
          
        <div className="flex flex-col mt-16">
          <button className="btn-dashboard">
            <Image src={'/Dashboard.svg'} alt='dashboard logo' width={18} height={18}/>
            Dashboard
          </button>
          <button className="btn-dashboard">
            <Image src={'/Intent.svg'} alt='intent logo' width={18} height={18}/>
            Set intent
          </button>
          <button className="btn-dashboard">
            <Image src={'/Materials.svg'} alt='materials logo' width={18} height={18}/>
            Materials
          </button>
          <button className="btn-dashboard">
            <Image src={'/Launch.svg'} alt='launch logo' width={18} height={18}/>
            CSM Companion
          </button>
        </div>

      </aside>
      <main className="w-full px-9">
        <Header />
        <div className="flex justify-between">
          <Infographics />
          <SessionComplete />
        </div>
        <div className="flex gap-x-10">
          <UpcommingMeeting />
          <CustomerJourney />
        </div>
      </main>
    </div>
  )
}
