import Avatar from "./Avatar";
import Speaker from "./Speaker";
import ChatMessage from "./ChatMessage";

export default function SpeakerBox({name, avatar, messages = [], placeholder}) {
  return (
    <div className=" bg-grayBg bg-opacity-10  rounded-lg flex-col  h-[338px] min-w-96 mb-6 max-w-sm">
      <div className="bg-grayPlate flex rounded-t-lg ">
          {avatar && <Avatar src={avatar} size={64} alt="people photo"/>}
        <p className="text-lg font-medium text-black p-4 self-center">{name}</p>
      </div>
      <div className="pt-4">
        <div className="flex justify-end">
          <Speaker />
        </div>
      </div>
      <div className="p-4">
          <div className="max-h-52 overflow-auto">
          {
            messages.map((message, index) => (
              <div className="mb-4" key={index + "chat-"}>
                <ChatMessage message={message}/>
              </div>
            ))
          }
              {messages.length === 0 && <div className="whitespace-pre-line text-placeholder text-center	">{placeholder}</div>}
          </div>
      </div>
    </div>
  )
}
