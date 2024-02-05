export default function Dropdown({options, onChange, value}) {
  return (
  <div className="w-[560px] flex justify-center">
    <select className="p-2 h-12 border rounded flex items-center" onChange={onChange} value={value}>
      {options.map((option, index) => (
        <option key={index} value={option.value} className="h-12 p-4">
            {option.label}
        </option>
        ))}
    </select>
  </div>
  )
}
