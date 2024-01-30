import Avatar from "./Avatar";
import photo from "../../public/Frame 10.png"
import ChatBox from "./ChatBox";
import Speaker from "./Speaker";

export default function Card() {
  return (
    <div className=" bg-slate-500 bg-opacity-10 rounded-lg overflow-hidden mb-8">
      <div className="bg-slate-400  flex">
        <Avatar src={photo} size={64} alt="people photo" />
        <p className="text-lg font-medium text-gray-800 p-4 self-center">Ms. Wilson</p>
      </div>
      <div className="pt-4">
        <div className="flex justify-end">
          <Speaker />
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <ChatBox />
        </div>
        <div className="mb-4">
          <ChatBox />
        </div>
        <div className="mb-4">
          <ChatBox />
        </div>
        <div className="mb-4">
          <ChatBox />
        </div>
      </div>
    </div>
  )
}
