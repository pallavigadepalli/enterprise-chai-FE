
export default function Banner() {
  return (
    <div className="h-14 bg-orange-500 px-4 flex justify-start container mx-auto" style={{
      background: 'linear-gradient(90deg, rgba(220, 104, 3, 0.09) 0%, rgba(220, 104, 3, 0.09) 100%)',
      paddingLeft: '40px',
      paddingRight: '40px',
      alignItems: 'center'
    }} 
    >
      <p className="text-orange-500 text-bold">This is a FREE trial session 2 of 5</p>
    </div>
  );
}
