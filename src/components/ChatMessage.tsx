interface ChatMessageProps {
    message: any;
}
export default function ChatMessage({message}: ChatMessageProps) {
    return (
        <div className="w-full p-4 bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
                <div className="ml-3">
                    <div className="text-sm text-grayCustom font-extralight">{message.timestamp}</div>
                    <p>{message.text}</p>
                </div>
            </div>
        </div>
    )
}
