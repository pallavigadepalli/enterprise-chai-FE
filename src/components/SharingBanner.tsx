
export default function Banner() {
  return (
    <div className="h-16 bg-white gap-4  flex  w-full items-center  mb-4 shadow-md shadow-opacity-15 space-x-16"> 
      <p className="text-black sharing-banner px-10">Sharing https://meet.google.com to app.enterpriseCHAI.com</p>
      <button className="p-2 h-10 rounded-full bg-indigo-200 px-14  ">View tab: meet.google.com </button>
      <button className="text-white bg-indigo-500 p-2 h-10 px-6 rounded-full">Stop sharing</button>
    </div>
  );
}