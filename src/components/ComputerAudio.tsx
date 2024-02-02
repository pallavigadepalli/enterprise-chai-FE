import Image from "next/image";
import micIcon from "../../public/mic.png"
import Dropdown from "./Dropdown";

export default function ComputerAudio() {
  return (
    <div className="w-[560px] h-[180px] bg-primaryBG rounded-lg ">
      <div className="h-12 bg-tertiary rounded-t-lg flex items-center gap-4 p-4">
        <Image
        src={micIcon}
        alt='microphone'
        width={24}
        height={24}
        />
        <span className="text-white">Computer audio</span>
      </div>
      <div className="space-y-4 pt-10">
        <Dropdown />
      </div>
    </div>
  )
}
