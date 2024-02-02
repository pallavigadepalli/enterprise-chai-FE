import Image from "next/image";
import Dropdown from "./Dropdown";

export default function ComputerAudio() {
  return (
    <div className="w-[560px] h-[180px] bg-primaryBG rounded-lg">
      <div className="h-12 bg-tertiary rounded-t-lg flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <Image
          src={'/mic.png'}
          alt='microphone'
          width={24}
          height={24}
          />
          <span className="text-white">Computer audio</span>
        </div>
        <div>
          <Image
          src={'/check-circle.png'}
          alt='check-circle'
          width={24}
          height={24}
          />
        </div>
      </div>

      <div className="space-y-4 pt-10">
        <Dropdown />
      </div>
    </div>
  )
}
