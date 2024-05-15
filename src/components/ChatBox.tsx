interface ChatBoxProps {
    message: any;
}
export default function ChatBox({message}: ChatBoxProps) {
    return (
        <div className="w-full p-4 bg-white rounded-2xl shadow-md">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3">
                    <div className="text-sm text-grayCustom font-extralight">{message.timestamp}</div>
                    <div
                        dangerouslySetInnerHTML={{__html: message.text}}
                    ></div>
                </div>
            </div>
        </div>
    )
}
