import Image from "next/image";
import AnswerGenerator from "./AnswerGenerator";
import ChatBox from "./ChatBox";
import Link from "next/link";

export default function Layout() {
  return (
    <div className="w-4/5 h-[700px] bg-primaryBg bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-primaryCustom px-4 pt-3 pb-3 flex items-center justify-between">
        <Link className="flex items-center justify-items-center text-base text-white gap-x-1" href={'/'}>
          <span>Enterprise</span>
          <Image src="/cup_logo.svg" alt="Logo" width={27} height={28} className='mb-4 svg-white'/>
          <span className="font-semibold">CH</span>
          <span className="font-semibold text-warning">AI</span>
          <span>Assistant</span>
        </Link>
      </div>
      <div className="w-full flex self-end pt-4">
        <AnswerGenerator />
      </div>
  
      <div className="p-4">
        <div className="mb-4">
          <ChatBox />
        </div>
        <div className="mb-4">
          <ChatBox />
        </div>
      </div>
    </div>
  )
}
