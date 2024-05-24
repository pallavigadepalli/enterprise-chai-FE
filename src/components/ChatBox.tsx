import Image from "next/image";

interface ChatBoxProps {
    message: {
        answer: string;
        timestamp: string;
        generated_by: string;
    }
}
export default function ChatBox({message}: ChatBoxProps) {
    return (
        <div className={""}>
            <div className="w-full p-4 bg-white rounded-2xl shadow-md mb-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ml-3">
                        <div className="text-sm text-grayCustom font-extralight text-xs">{message.timestamp}</div>
                        <div
                            dangerouslySetInnerHTML={{__html: message.answer}}
                        ></div>
                    </div>
                </div>
            </div>
            {message.generated_by && <div className="text-sm italic relative -bottom-1 text-right flex justify-end gap-4 text-grayLight2 font-normal text-xs pr-3">
                {message.generated_by}
                <Image src="/thumbs-down.svg" alt="arrow" width={20} height={20} className={'h-5 self-center'}/>
            </div>}
        </div>
    )
}
