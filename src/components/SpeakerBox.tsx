import Avatar from "./Avatar";
import photo from "../../public/Frame 10.png"
import Speaker from "./Speaker";
import ChatMessage from "./ChatMessage";

export default function SpeakerBox({name, avatar, messages = []}) {
  return (
    <div className=" bg-grayBg bg-opacity-10 rounded-lg overflow-y-auto h-[400px] mb-8">
      <div className="bg-grayPlate flex">
        <Avatar src={photo} size={64} alt="people photo" />
        <p className="text-lg font-medium text-black p-4 self-center">{name}</p>
      </div>
      <div className="pt-4">
        <div className="flex justify-end">
          <Speaker />
        </div>
      </div>
      <div className="p-4">
          {
              messages.map((message, index) => (
                    <div className="mb-4" key={index + "chat-"}>
                        <ChatMessage message={message}/>
                    </div>
                ))
          }
      </div>
    </div>
  )
}
