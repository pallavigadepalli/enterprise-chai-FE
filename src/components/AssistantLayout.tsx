import Image from "next/image";
import AnswerGenerator from "./AnswerGenerator";
import ChatBox from "./ChatBox";
import {useEffect, useRef} from "react";

interface AssistantLayoutProps {
    messages: string[];
}
export default function AssistantLayout({messages}: AssistantLayoutProps) {
    const messagesEndRef = useRef<any>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [messages]);
  return (
    <div className="w-4/5 h-[700px] bg-primaryBg bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-primarySmall px-4 pt-3 pb-3 flex text-white items-center">
          <span className={''}>Enterprise</span>
          <Image src="/cup_shaded.svg" alt="Logo" width={43} height={45} className={'mx-1 mb-2'}/>
          <span className={'font-bold'}>CH</span>
          <span className={'text-greenLogo font-bold'}>AI</span>
          <span>&nbsp; Assistant</span>
      </div>
      <div className="w-full flex self-end pt-4">
        <AnswerGenerator />
      </div>

        { messages.length > 0 && <div className="p-4 overflow-y-auto h-[600px]" ref={messagesEndRef}>
            {messages.map((message, index) => (
                <div className="mb-4" key={index + "chat-"}>
                    <ChatBox message={message}/>
                </div>))
            }
        </div>}
        {messages.length === 0 && <div className={'flex h-full justify-center mt-10 text-viewPlaceholder'}>
          <p className={'text-center'}>Your Real-Time assistant is here to answer your questions. It&apos;s tailored to<br/>
            respond based on your conversation with the client during the call, and will be<br/>
            displayed here.</p>
        </div>}
    </div>
  )
}
