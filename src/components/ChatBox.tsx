import Image from "next/image";
import {useMarkdownProcessor} from "@/hooks/markdown";

interface ChatBoxProps {
    message: {
        answer: string;
        timestamp: string;
        generated_by: string;
    }
}
export default function ChatBox({message}: ChatBoxProps) {
    const content = useMarkdownProcessor(message.answer);
    return (
        <div className={""}>
            <div className="w-full p-4 bg-white rounded-2xl shadow-md mb-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ml-3">
                        <div className="text-sm text-grayCustom font-extralight text-xs">{message.timestamp}</div>
                        <li className="flex flex-col flex-1 min-w-0 gap-1 ml-6 selection:bg-emerald-300 selection:text-emerald-900">
                            <div className="p-2 lg:p-6 border-2 border-emerald-200 rounded-lg bg-emerald-50 text-emerald-900 min-w-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                                {content}
                            </div>
                        </li>
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
