import Image from "next/image";
import AnswerGenerator from "./AnswerGenerator";
import ChatBox from "./ChatBox";
import Link from "next/link";
import {useEffect, useRef} from "react";

export default function Layout({messages}) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [messages]);
  return (
    <div className="w-4/5 h-[700px] bg-primaryBg bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-primaryCustom px-4 pt-3 pb-3 flex items-center justify-between">
        <Link className="flex items-center justify-items-center text-base text-white " href={'/'}>
          <span className="px-1">Enterprise</span>
          <Image src="/cup_logo.svg" alt="Logo" width={27} height={28} className='mb-4 svg-white px-1'/>
          <span className="font-semibold">CH</span>
          <span className="font-semibold text-warning">AI</span>
          <span>Assistant</span>
        </Link>
      </div>
      <div className="w-full flex self-end pt-4">
        <AnswerGenerator />
      </div>

      <div className="p-4 overflow-y-auto h-[600px]" ref={messagesEndRef}>
          { messages.map((message, index) => (
              <div className="mb-4" key={index + "chat-"}>
                  <ChatBox message={message}/>
              </div>))

          }

      </div>
    </div>
  )
}
