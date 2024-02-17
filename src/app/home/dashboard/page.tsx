import Image from "next/image";
import Header from "@/components/Header";
import Infographics from "@/components/Infographics";
import UpcommingMeeting from "@/components/UpcommingMeeting";
import CustomerJourney from "@/components/CustomerJourney";
import Aside from "@/components/Aside";

export default function Materials() {
  return (
      <main className="w-full px-9">
        <Header />
        <div className="flex">
          <Infographics />
        </div>
        <div className="flex gap-x-10">
          <UpcommingMeeting />
          <CustomerJourney />
        </div>
      </main>
  )
}
