export default function Layout() {
  return (
    <div className="w-4/12  bg-purple-600 bg-opacity-10 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-purple-300 p-4">
        <p className="text-lg font-semibold text-gray-800">Nombre del Chat</p>
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
