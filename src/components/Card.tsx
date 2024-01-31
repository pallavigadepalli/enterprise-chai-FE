import Avatar from "./Avatar";
import photo from "../../public/Frame 10.png"
import Speaker from "./Speaker";
import ChatMessage from "./ChatMessage";

export default function Card() {
  return (
    <div className=" bg-grayBg bg-opacity-10 rounded-lg overflow-hidden mb-8">
      <div className="bg-grayPlate flex">
        <Avatar src={photo} size={64} alt="people photo" />
        <p className="text-lg font-medium text-black p-4 self-center">Ms. Wilson</p>
      </div>
      <div className="pt-4">
        <div className="flex justify-end">
          <Speaker />
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <ChatMessage />
        </div>
        <div className="mb-4">
          <ChatMessage />
        </div>
        <div className="mb-4">
          <ChatMessage />
        </div>
        <div className="mb-4">
          <ChatMessage />
        </div>
      </div>
    </div>
  )
}
