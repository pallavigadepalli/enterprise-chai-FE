export default function ChatMessage({message}) {
  return (
  <div className="w-full p-4 bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md">
    <div className="flex items-center">
      <div className="flex-shrink-0">
      </div>
      <div className="ml-3">
        <div className="text-sm text-grayCustom font-extralight">13:56</div>
        <p>{message}</p>
      </div>
    </div>
  </div>
  )
}
