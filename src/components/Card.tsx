import Avatar from "./Avatar";
import photo from "../../public/Frame 10.png"

export default function Card() {
  return (
    <div className="w-4/12  bg-slate-500 bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-slate-400  flex">
        <Avatar src={photo} size={64} alt="people photo" />
        <p className="text-lg font-medium text-gray-800 p-4 self-center">Ms. Wilson</p>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <p className="text-gray-700"><strong>Tú:</strong> Hola, ¿cómo estás?</p>
        </div>
      
        <div className="mb-4">
          <p className="text-gray-700"><strong>Amigo:</strong> ¡Hola! Estoy bien, ¿y tú?</p>
        </div>
      </div>
    </div>
  )
}
